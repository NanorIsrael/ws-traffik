import React, {useState} from 'react';
import axios from "axios";
import {baseUrl} from "../shared/baseUrl";

function RenderResults({content} ) {
    console.log(content)
    if(content.error){
      return  <p className='p-5 display-6' role='alert'  style={{color:"red"}}>{content.error}</p>
    } else {
        const item = content.data.estimations;
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            visitors
                        </th>
                        <th>
                            Page views
                        </th>
                        <th>
                            Revenue
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Daily</td>
                        <td>{item.visitors.daily}</td>
                        <td>{item.pageviews.daily}</td>
                        <td>{item.revenue.daily}</td>
                    </tr>
                    <tr>
                        <td>Monthly</td>
                        <td>{item.visitors.monthly}</td>
                        <td>{item.pageviews.monthly}</td>
                        <td>{item.revenue.monthly}</td>
                    </tr>
                    <tr>
                        <td>Yearly</td>
                        <td>{item.visitors.yearly}</td>
                        <td>{item.pageviews.yearly}</td>
                        <td>{item.revenue.yearly}</td>
                    </tr>
                    </tbody>
                </table>

                {/*<BasicTable/>*/}
            </div>
        )
    }
}

function InfoSection(props) {
    const [host, setHost] = useState('');
    const [content, setContent] = useState(null);

    const isValid = getErrors(host);

    function getErrors (form){
        return form === '';
    }

    const handleSubmit = async(event) => {
        try{
            const res = await axios.get(baseUrl + `/?key=2fe95c95f13b5d8183915a3531b6457229386e05&host=${host}`);
            setContent(res.data);
        } catch (error) {
            error.message = 'An error occurred. Please try again after sometime';
            throw error;
        }
       event.preventDefault();
    }
    return (
        <>
            <div className='container'>
                    <form className='row p-5'>
                        <p className='p-2 me-2 my-2'>Just enter the website (e.g. google.com) and press the button.</p>

                        <div className='col-md-8'>
                            <input className='form-control p-2 me-2 my-2' type='text' placeholder='paste url...' onChange={(e) => setHost(e.target.value)}/>
                        </div>
                        <div className='col-md-3'>
                            <button className='form-control btn btn-primary pe-auto me-1 my-2 p-2' type='button' style={{color:"white"}} onClick={handleSubmit} disabled={isValid}>Analyze</button>
                        </div>
                    </form>
                {content && <div className='row'>
                    <h3 className='p-5'>Results</h3>
                    <RenderResults content={content}/>
                </div>}
            </div>
        </>
    );
}

export default InfoSection;