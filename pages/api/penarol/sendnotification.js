import { Expo } from 'expo-server-sdk';
let expo = new Expo();

// Documentacion: https://github.com/expo/expo-server-sdk-node
// https://docs.expo.dev/push-notifications/sending-notifications/#individual-errors

export default async function sendnotification(req, res) {
        if(req.method === "POST") {
            let body = JSON.parse(req.body);

            let users = body.users; // Objeto que contiene objetos en fomrato ID_FIREBASE: {token: TOKEN_EXPO , id: ID_FIREBASE}
            let info = body.info; // Contiene la informacion de la notificacion titulo descripcion y screen
            let data = info.data ? info.data : {}; // Contiene los parametros que son recibidos en la APP

            let messages = [];
            let userFinal = {};

            let errorChunk = 0;

            for (let keyIDFire in users) { 
                let user = users[keyIDFire];
                if (!Expo.isExpoPushToken(user.token)) {
                   // console.log("No es un token de expo!");
                } else {
                    userFinal[user.id] = user;
                }
            }

            for (let key in userFinal) { 
                let user = userFinal[key];
                messages.push({  // Construct a message (see https://docs.expo.io/push-notifications/sending-notifications/)
                    to: user.token,
                    channelId: 'default',
                    title: info.title,
                    body: info.description,
                    data: JSON.stringify({screen: info.screen, data}),
                });
            }

            let chunks = expo.chunkPushNotifications(messages);  // Contendra arrelgo con los push dividos en diferentes array si son muchos
            let tickets = [];
            
            // Envio notificaciones por primera vez
            let enviarPush = async () => {
                for (let chunk of chunks) {
                    try {
                        let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
                        tickets.push(...ticketChunk);
                    } catch (error) {
                        console.log("Error del chunk: ", error);
                        // Para poner el ID de los que no se pudieron enviar igual, 
                        // para cuando borrar los index sean correctos
                        let indexArray = chunk.map(el => undefined);
                        tickets.push(...indexArray);
                        errorChunk += 1;
                        chunksError.push(chunk);
                    }
                }
                return;
            };
            await enviarPush();


            let DeviceNotRegisteredCount = 0;
            let DiviceNoRegisterUserId = [];

            let usersArray = Object.keys(userFinal);
            tickets.forEach((el, i) => {
                  if(el == undefined) {
                      return;
                  }
                  if(el.status == "error") {
                        if(el.details.error == "DeviceNotRegistered") {
                            DeviceNotRegisteredCount += 1;
                            let idFireUser = usersArray[i];
                            DiviceNoRegisterUserId.push(idFireUser);
                        }
                  }
            });

            console.log("Los ticket son", tickets);

            let notificationsSended = tickets.length;
            let notificationsError = tickets.filter(el => el?.status != "ok").length;
            let notificationSuccess = notificationsSended - notificationsError;

            let responseToFront = {notificationsSended, notificationsError, notificationSuccess, DeviceNotRegisteredCount, DiviceNoRegisterUserId, errorChunk};

            res.json(responseToFront);
            
        }

        res.status(500).json({ message: 'ACCESS DENIED'})
}