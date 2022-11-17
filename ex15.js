let chen="Bonjour hidden salut les amis endpass Dieu vous aime";
console.log("chen avan : "+chen);
chen=chen.split(' ');
chen=chen.slice(chen.indexOf('hidden')+1,chen.indexOf('endpass'));
chen=chen.join(' ');
console.log("chen apre : "+chen);
