// src/environment/environment.dev.js
const environment = {
  API_URL: "http://192.168.1.15:4578/ims_api/",
  GRANT_TYPE : 'password',
  CLIENT_ID : 'ims-vts15',
  CLIENT_SECRET : 'HqWpEDmsZFTZQKMbQsFKPQxvfPtOjtGZ',
  TOKEN_URL : 'http://192.168.1.15:9090/realms/DRDONEW/protocol/openid-connect/token',
  MOM_URL : 'http://10.128.19.42:8080/pmslrde/CommitteeMinutesViewAllDownloadPdf.htm',
  REFRESH_GRANT_TYPE : 'refresh_token'
  // Add other development-specific configurations here
};

export default environment;
