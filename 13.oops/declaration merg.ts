interface car{
    brand :string;
    start():void;
}
interface car{
  model :string;
  stop():void;
}
const car1:car={
    brand:"BMW",
    model:"m3",
    start(){
        console.log("start");
    },
    stop(){
        console.log("car is stoping");
    }
}
car1.start()
car1.stop()
