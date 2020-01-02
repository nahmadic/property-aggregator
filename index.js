import { getHTML } from './lib/data';

async function getData(){
  console.log(await getHTML());
}

getData();