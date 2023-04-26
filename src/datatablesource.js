export const usercolumn = [{field:'id',headerName:'ID',width:70},{
    field:'user',headerName:'User',width:230,renderCell=(params)=>{
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar"/>
                {params.row.username}
            </div>
        )
    }
}]






//temporary data