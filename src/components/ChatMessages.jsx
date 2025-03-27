import ReactMarkdown from 'react-markdown';
import useAutoScroll from '@/hooks/useAutoScroll';
import Spinner from '@/components/Spinner';
import userIcon from '@/assets/images/user_icon.png';
import errorIcon from '@/assets/images/error.svg';
import botIcon from '@/assets/images/new_icon.png';
import remarkGfm from 'remark-gfm';

function ChatMessages({ messages, isLoading }) {
  const scrollContentRef = useAutoScroll(isLoading);
  
  return (
    <div ref={scrollContentRef} className='grow space-y-4 mx-auto w-3/5'>
      {messages.map(({ role, content, loading, error }, idx) => (
        <div key={idx} className={`flex whitespace-normal break-spaces items-start gap-4 py-4 px-3 rounded-xl${role === 'user' ? 'bg-primary-blue/10 flex-row-reverse' : ''}`}>
          {role === 'user' && (
            <img
              className='h-[30px] w-[30px] shrink-0'
              src={userIcon}
              alt='user'
            />
          )}
          {role === 'assistant' && (
            <img
              className='h-[56px] w-[56px] shrink-0'
              src={botIcon}
              alt='assistant'
            />
          )}
          <div>
            <div className='markdown-container'>
              {(loading && !content) ? <Spinner />
                : (role === 'assistant')
                  ? <div className='border rounded-xl pl-4 pr-2 pt-2'><ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown> </div>
                  : <div className='whitespace-pre-line bg-gray-200 rounded-xl px-4 py-2'>{content}</div>
              }
            </div>
            {error && (
              <div className={`flex-row-reverse items-center gap-1 text-sm text-error-red ${content && 'mt-2'}`}>
                <img className='h-5 w-5' src={errorIcon} alt='error' />
                <span>Error generating the response</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatMessages;