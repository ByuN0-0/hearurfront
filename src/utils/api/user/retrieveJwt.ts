const retrieveJwt = async (): Promise<string | null> => {
  if (typeof window !== 'undefined') {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      return jwt;
    } else {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        const response = await fetch(`${baseUrl}/api/v1/auth/jwt`, {
          credentials: 'include',
        });
        const newJwt = response.headers.get('authorization');
        if (newJwt) {
          return newJwt;
        }
      } catch (error) {
        console.error("서버가 안켜져있거나 쿠키가 없거나 서버에 문제가있음");
        //console.error('Error retrieving JWT:', error);
      }
    }
  }
  return null;
};

export default retrieveJwt;