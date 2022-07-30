import {useEffect} from 'react'
// our custom hook for doing same work in useCustom1 & useCustom2 i.e showing count value in title bar

function useTitleCount(count) {
    useEffect(() => {
        console.log("useEffect called");
        if (count >= 1) {
          document.title = `chats(${count})`;
        } else {
          document.title = `chats`;
        }
      });
}

export default useTitleCount
