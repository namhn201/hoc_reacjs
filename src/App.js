import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import Content from './Content';

function App() {

  

  // useState ví dụ 
  // const [info, setInfo] = useState({
  //   name: "Nguyễn Văn A",
  //   age: 18
  // })
  // const handleUpdate = function(){
  //   console.log(info)
  //   setInfo({
  //     ...info,
  //     bio: "Ông B"
  //   })
    
  // }
  
  //Baitap 1:
  //khi chạy hiển thị ra chưa có phần thưởng và button lấy thưởng
  //click  vào thì hiển thị random phần thưởng thay thế cho dòng chữ trong thẻ 
  // const gift =[
  //   {id: 1, name: "CPU i9"},
  //   {id: 2, name: "RTX 4090 "},
  //   {id: 3, name: "Keyboard"},
  // ]

  // const [item, setItem] = useState()
  // const handleGift =function(){
  //   const random = Math.floor(Math.random()*3)
  //   // console.log(random)
  //   const data = gift[random]
  //   setItem(data)
     
  // }
  //TWO-Waying Binding
  // const[name, setName] = useState('')
  // const[mail, setMail] = useState('')
  // const[checked, setChecked]= useState([]) CHECKBOX, RADIO THÌ BỎ GIÁ TRỊ KHỎI TẠO LÀ MẢNG ĐI
  // console.log(checked)
  // console.log(name)

  //ham vi du radio
  // const handleSubmit = (id) =>{
  //   setChecked(pre => {
  //     const isChecked = checked.includes(id)
  //     if(isChecked){
  //       return checked.filter(item => item !== id)
  //     }else{
  //       return [...pre,id]

  //     }
  //   })
    // setChecked(pre=> [...pre,id])
  // }

  //////TODOLIST
  // const jobList = []
  // const [job,setJob] = useState('')
  // const[jobs, setJobs]= useState([])
  // const handleClick = ()=>{
  //   setJobs(jobs => [...jobs,job] )
  // }
  // console.log(jobs)

    //useEffect
    const [toggle, setToggle] = useState(false)
    return (
    //useEfect
    <div className='useEfect'>
      <h1>       {toggle && <Content/>} 
      </h1>
      <button onClick={()=>setToggle(!toggle)}>Show</button>
      {/* <Content/> */}

    </div>


    // //Todolist
    // //TẠO DANH SÁCH CÔNG VIỆC => MẢNG
    // <div className='job'>
    //   <input
    //   value={job}
    //   onChange={e=> setJob(e.target.value)}
    //   />
    //   <button onClick={handleClick}>Submit</button>
    //   <ul>
    //     {
    //       jobs.map((jobs, index)=>{
    //        return <li key={index}>{jobs}</li>
    //       })
    //     }
    //   </ul>
    // </div>
    
    //CHECKBOX, RADIO
  //   <div className='App' style={{padding: 32}}>
  //    {/* Radio chọn một cái */}
  //     {/* {gift.map(gift => (
  //       <div key={gift.id}>
  //         <input type='radio'
  //         checked={checked === gift.id}
  //         onChange={() => setChecked(gift.id)}
  //         />
  //         {gift.name}
       
  //       </div>
  //     ))} */}
         
  //        {gift.map(gift => (
  //       <div key={gift.id}>
  //         <input type='checkbox'
  //         checked={checked.includes(gift.id)}
  //         onChange={() => handleSubmit(gift.id)}
  //         />
  //         {gift.name}
       
  //       </div>
  //     ))}



  // <button onClick={handleSubmit}>Update</button> 

     
  //   {/* <input 
  //    value ={name} 
  //    onChange={e=> setName(e.target.value)} />
  //   <button onClick={()=>setName("Â")}>
  //     Change
  //   </button> */}
  //     {/* <h5>{item || 'Chưa có phần thưởng'}</h5>
  //     <button onClick={handleGift}>Click</button> */}
  //   {/* <h1>{info.name}</h1>
  //   <h2>{info.bio}</h2>
  //   <button onClick={handleUpdate}>Update</button> */}


  //   </div>



    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // console.log("ádasd")

  );
}

export default App;
