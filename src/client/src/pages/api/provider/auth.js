import axios from 'axios';

export default async function handler(req, res) {
  const { state, code } = req.query;

  if (state && code) {
    const details = {
      state: state,
      code: code
    };

    const formBody = Object.keys(details)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(details[key]))
      .join('&');

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cookie': req.headers.cookie,
      }
    };

    try {
      const response = await axios.post(`http://server:8000/_api/auth/o/google-oauth2/?${formBody}`, null, config);

      res.status(200).json({
        type: "GOOGLE_AUTH_SUCCESS",
        payload: response.data
      });
    } catch (error) {
      res.status(200).json({
        type: "GOOGLE_AUTH_FAIL",
        error: error 
      });
    }
  } else {
    res.status(400).json({
      error: "Missing state or code parameters"
    });
  }
}
