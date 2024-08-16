import { useEffect,useState,useRef } from "react"


//NOTE: Cả trong 3 trường hợp trên callback luôn luôn được gọi sau khi component mounted
//cleanup function luôn được gọi trước khi component unmounted
//cleanup function luôn được gọi trước khi callback được gọi(trừ lần mounted)

//1.useEffect(callback)
//-Gọi callback mỗi khi component re-render
//-Nó sẽ gọi callback sau khi component thêm element vào DOM (đơn giản là sau khi hàm return chạy xong thì callback của useEffect mới trả ra kết quả)
//  +Chi tiết hơn là khi đọc code. Thì useEffect vẫn chạy trước vẫn nhận được callback nhưng sẽ chưa trả ra kết quả. Nó sẽ đợi sau khi hàm return chạy xong mới trả ra kết quả
//2.useEffect(callback,[])
//-Chỉ gọi callback 1 lần sau khi component được mounted 
//3.useEffect(callback,[deps])
//+Callback sẽ được gọi lại mỗi khi deps thay đổi

//--BÀi 1 UpdateDOM
//+Task 3 button  gọi coment album post

    function Content(){
    //useEffect(callback,[deps])



    // //state update DOM
    // const [title,setTitle] = useState('') 
    // //state dùng cho call api
    
    // const [posts, setPosts] = useState([])
    // const [type, setType] = useState('posts')
    // //state dùng cho DOM    
    // const tabs = ["posts","comments","albums"]
    // const [scroll, setScroll] = useState(false)
    // console.log(type)
    // console.log(scroll)

    // useEffect(()=>{
       
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //     .then(data=> data.json())
    //     .then(result => setPosts(result))    
    // },[])

                                                        ///useEffect call API
    // useEffect(()=>{
       
    //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //     .then(data=> data.json())
    //     .then(result => setPosts(result))    
    // },[type])

                                                        /////   useEffect with DOM
    // useEffect(()=>{
    //     window.addEventListener('scroll',()=>{
    //         setScroll(window.scrollY >=200)
    //         // if(window.screenY >=200){
    //         //     console.log(true)
    //         // }
    //         console.log(window.scrollY)
            
    //     })
    //     return ()=>{
    //         console.log("Unmounted")
    //     }


    // },[])

    // const handleScroll = ()=>{
    //     window.addEventListener('scroll')
    // }


    //useEffect with timerFunction()
    // const [countdown, setCountdown] = useState(180)
    // console.log(countdown)
    // useEffect(()=>{
    //     setTimeout(()=> {
    //         setCountdown( countdown-1)
            
    //     },1000)
    // },[countdown])

    //Bài tập 2 về  use Effect kết hợp useState set ảnh
    // const [image, setImage] = useState('')
    // const handleFile = (e)=>{
    //     const file = e.target.files[0]
    //     console.log(URL.createObjectURL(file))
    //     setImage(URL.createObjectURL(file))
        
    // }

    // useEffect(() => {
    //     return ()=>{
    //         // console.log("clear")
    //         URL.revokeObjectURL(image)
    //     }
        
    // },[image])


    ///useRef
    //+ Lưu được giá trị qua một tham chiều component
    //+ function component
    let timerId = useRef()
    console.log("Mounted")
    const [count, setCount] = useState(60)

    const handleStart = () =>{
        timerId.current = setInterval(()=> {
        setCount(prev => prev - 1)
        },1000)
    }
    const handleStop = ()=>{
        console.log(timerId.current)
        clearInterval(timerId.current)
    }
    
    

    return(
        <div className="useRef">
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>End</button>

        </div>


        // <div className="bài_tập_2_selector_image_cung_voi_clean_up_function">
        //     <input
        //     type="file"
        //     onChange={handleFile}
        //     />
        //     <div>
        //         <img src={image}></img>
        //     </div>

        // </div>


        // <div className="with_TimerFunction">
        //     <h1>{countdown}</h1>
        // </div>



        // <div className="callAPI_and_DOM">
        //     <div>
        //         {tabs.map(tabs =>(
        //             <button 
        //             key={tabs}
        //             onClick={()=> setType(tabs)}
        //             style={tabs===type ? {
        //                 color: "white",
        //                 backgroundColor: "black"
        //             }:{}}
        //             >
        //                 {tabs}
        //             </button>
        //         ) )}
        //     </div>
        //     <input
        //     // value={title}
        //     onChange={e=> setTitle(e.target.value)}
        //     />
        //     <ul>
        //         {posts.map(post =>(
        //             <li key={post.id}>{post.title|| post.name}</li>
        //         ))}
        //     </ul>
        //     <div
        //     style={{
        //         position: 'fixed',
        //             bottom: '20px',
        //             right: '20px',
        //     }}
        //     >
        //         {scroll ?"cút lên trên":""}
        //     </div>
        // </div>
    )
}
export default Content