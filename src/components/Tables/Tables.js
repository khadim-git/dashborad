
import TableData from '../../JsonData/TableData/TableData'

const  Tables = () =>{
    const  data = TableData[0]
    console.log(data)
    return(
        <>

                        <h1 className="h3 mb-2 text-gray-800">Tables</h1>
                        <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                            For more information about DataTables, please visit the <a 
                                href="https://datatables.net">official DataTables documentation</a>.</p>

                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Position</th>
                                                <th>Office</th>
                                                <th>Age</th>
                                                <th>Start date</th>
                                                <th>Salary</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Name</th>
                                                <th>Position</th>
                                                <th>Office</th>
                                                <th>Age</th>
                                                <th>Start date</th>
                                                <th>Salary</th>
                                            </tr>
                                        </tfoot>
                                     <tbody>
                                        {data.name.map((item ,key) =>{
                                            return(
                                                <tr>
                                                    <td key={key}>{item}</td>
                                                    <td>{data.position[key]}</td>
                                                    <td>{data.office[key]}</td>
                                                    <td>{data.age[key]}</td>
                                                    <td>{data.startdate[key]}</td>
                                                    <td>{data.salary[key]}</td>
                                                </tr>
                                                    )
                                                })}
                                     </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                            
      </>
        
      
    );
  }
  
  export default Tables;