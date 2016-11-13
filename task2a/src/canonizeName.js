export default function canonizeName(str) {
  try {
    const invalid_name = "Invalid fullname"
    console.log("/" + str + "/");
    let names = str.trim().split(' ');
    
     names = names.filter((elem) => {
      return elem != '' ? true : false;
     })
    console.log(names);
    if (names.length <= 0 || names.length > 3) {
      return invalid_name;
    }
    const re =/[\d\_\/]/;
    let testing = false;
    names.forEach((n) => {
        if ((re.test(n))) {
            testing = true;
            return 0; 
        }
    });
    if (testing) {
        return invalid_name;
    }
    let lastName = names[parseInt(names.length - 1)];
    let name = lastName.toLowerCase();
    name = name.charAt(0).toUpperCase() +  name.slice(1);

    for (let i = 0; i < names.length - 1; i++) {
      name = name + ' ' + names[i].charAt(0).toUpperCase() + '.';
    }
    
    return name;
  } catch (err) {
    console.log(err);
  }
}
