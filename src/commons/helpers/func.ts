export function formatMoney(amount: number | undefined) {
    if(!amount) return "";
    if(amount.toString().length < 4) {
        return amount.toString()
    }
    const arrayResult = [];
    let str: string[] = amount.toString().split("");
    let length =str.length
    let pointer = 0;
    let j = 1
    for(let i = length; i >=0; i--){
        if(3*j+1 === pointer){
            arrayResult.push(".")
            j++
        }
        arrayResult.push(str[i])
        pointer++
    }
    return arrayResult.reverse().join("")
}

export const formatDate = (isoString?:any) => {
    if(!isoString) return "";
    const date = new Date(isoString);
    
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
  
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  
    return `${formattedDay}/${formattedMonth}/${year} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };