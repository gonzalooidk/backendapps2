export default function Dashboard() {
  return (
    <div>
        <div className="contenedorDashboard">
          <h2 style={{padding: 30, textAlign: 'center', opacity: .7}}>Escoge una app</h2>
        </div>
    </div>
  )
}

/*
export async function getServerSideProps(context) {
  if(context.req.cookies["server-key"] == "logued") {
      return {props: {}};
  }
  return {redirect: {destination: '/', permanent: false}};
}
*/
