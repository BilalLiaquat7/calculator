import { useEffect, useState } from 'react';

export default function Quote() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const getData = async () => {
      fetch('https://api.api-ninjas.com/v1/quotes?category=happiness', {
        headers: {
          'X-Api-Key': 'fDPmZpVzpJsZrqz3Waz2xQ==BEj9NXq27CsBpFNZ',
        },
      })
        .then((resp) => resp.json())
        .then((quote) => {
          setLoading(false);
          setQuote(quote[0].quote);
        })
        .catch((error) => setError(error));
    };
    getData();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>Error...</h2>;

  return <h3>{quote}</h3>;
}
