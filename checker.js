function parseCandidate(line) {
  var parts;
  // Parse both variants.
  if (line.indexOf('a=candidate:') === 0) {
    parts = line.substring(12).split(' ');
  } else {
    parts = line.substring(10).split(' ');
  }

  var candidate = {
    foundation: parts[0],
    component: parts[1],
    protocol: parts[2].toLowerCase(),
    priority: parseInt(parts[3], 10),
    ip: parts[4],
    port: parseInt(parts[5], 10),
    // skip parts[6] == 'typ'
    type: parts[7]
  };

  for (var i = 8; i < parts.length; i += 2) {
    switch (parts[i]) {
      case 'raddr':
        candidate.relatedAddress = parts[i + 1];
        break;
      case 'rport':
        candidate.relatedPort = parseInt(parts[i + 1], 10);
        break;
      case 'tcptype':
        candidate.tcpType = parts[i + 1];
        break;
      default: // Unknown extensions are silently ignored.
        break;
    }
  }
  return candidate;
};

var candidates = {};
var pc = new RTCPeerConnection({iceServers: [
    {urls: 'stun:stun1.l.google.com:19302'},
    {urls: 'stun:stun2.l.google.com:19302'}
]});
pc.createDataChannel("foo");
pc.onicecandidate = function(e) {
  if (e.candidate && e.candidate.candidate.indexOf('srflx') !== -1) {
    var cand = parseCandidate(e.candidate.candidate);
    if (!candidates[cand.relatedPort]) candidates[cand.relatedPort] = [];
    candidates[cand.relatedPort].push(cand.port);
  } else if (!e.candidate) {
    if (Object.keys(candidates).length === 1) {
      var ports = candidates[Object.keys(candidates)[0]];
      console.log(ports.length === 1 ? 'normal nat' : 'symmetric nat');
    }
  }
};
pc.createOffer()
.then(offer => pc.setLocalDescription(offer))
