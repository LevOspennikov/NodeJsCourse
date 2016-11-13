
export default function canonize(url) {
  const re = new RegExp('@?(https?:)?(\/\/)?((www\.)?([a-zA-Z-\._])[^\/]*\/)?@?([a-zA-Z_]*[\.]*[a-zA-Z_]*)', 'i');
  const username = url.match(re);
  console.log(username);
  return username[6];
}
