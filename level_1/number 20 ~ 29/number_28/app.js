function solution(new_id) {
  new_id = new_id
    .toLowerCase()
    .replace(/[^\w\.\-\_]/g, "")
    .replace(/\.+/g, ".")
    .replace(/^\.|\.$/g, "")
    .replace(/^$/m, "a");

  if (new_id.length > 15) {
    new_id = new_id.slice(0, 15).replace(/\.$/, "");
  }
  if (new_id.length < 3) {
    const tail = new_id.slice(-1);
    while (new_id.length < 3) {
      new_id += tail;
    }
  }

  return new_id;
}
