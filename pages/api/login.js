import {setCookie} from 'cookies-next';


export default function handlerLogin(req, res) {
  let passwordDB = "Dinero20";
  let passwordInserted = req.body.pass;

  if(passwordDB === passwordInserted) {
    // Seteo la Cookie durara 24 horas https://www.npmjs.com/package/cookies-next
    setCookie('server-key', 'logued', {req, res, maxAge: 60 * 60 * 24});
    res.redirect("/dashboard");
  } else {
    res.redirect("/");
  }
}
