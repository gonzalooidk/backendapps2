import Menu from './Menu';

export default function Layoutdashboard({children}) {


    if(children.props.router.route === "/404") {
        return(
            <div>
                {children}
            </div>
        )
    }

    return (
      <div>  
        <div className="dashboardContainer">
          <Menu routePath={children.props.router.route} />
          <div className="contenedorDashboard">
            {children}
          </div>
        </div>
      </div>
    );
}
