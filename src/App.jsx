import Chatbot from '@/components/Chatbot';
import logo from '@/assets/images/getsitelogo.png';

function App() {

  return (
    <div className='flex flex-col min-h-full w-full'>
      <header className='sticky top-0 shrink-0 z-20 bg-white'>
        <div className='flex flex-col h-full w-full gap-1 pb-2 items-left'>
          <a href='https://bicusa.sharepoint.com/sites/APBIVN-BIVNHOMEPAGE/SitePages/Home.aspx' className='bg-blue-700 '>
            <img src={logo} className='w-32' alt='logo' />
          </a>
          <h1 className='font-sans text-[1.65rem] font-semibold max-w-3xl mx-auto px-4'>R&D AI Chatbot</h1>
        </div>
      </header>
      {/* <div className='flex flex-col min-h-full w-full'> */}
      <Chatbot />
      {/* </div> */}
      
    </div>
  );
}

export default App;