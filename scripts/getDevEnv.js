const filesSystem = require('fs');
const { execSync } = require('child_process');

const podType = 'tpts-tiltakspenger-flate';
const podname = execSync('kubectl get pods', { encoding: 'UTF-8' })
  .split('\n')
  .find((line) => line.startsWith(podType))
  .split(' ')[0];
console.log('Using pod: ', podname);
const result = execSync(
  `kubectl exec --stdin --tty --namespace tpts ${podname} -c tpts-tiltakspenger-flate -- printenv | egrep "AZURE_APP_(WELL_KNOWN|CLIENT_ID|JWK=)"`,
  { encoding: 'UTF-8' }
);
console.log('Env fetched');
filesSystem.writeFileSync('.env', result);
console.log('File written');
