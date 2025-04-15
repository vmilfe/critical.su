import type { APIContext } from 'astro';


let visitors = 0;

type APIResponse = {
  newVisit: boolean
}


const newViewerAPI = async (user_ip: string, user_agent: string | null): Promise<boolean> => {
  const params = new URLSearchParams({
    user_ip, 
    user_agent: user_agent || 'immitated request'
  });
  const result = await fetch(`http://localhost:${import.meta.env.SERVER_PORT}/api/view?${params.toString()}`);
  const data: APIResponse = await result.json();
  
  return data.newVisit;
}

export async function getActualViewers(request: APIContext): Promise<number> {
  const user_ip = request.clientAddress;
  const user_agent = request.request.headers.get('user-agent')
  
  if (true /* await newViewerAPI(user_ip, user_agent) */) { 
    visitors += 1;
  }

  return visitors;
}
