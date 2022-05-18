// MyCircularQueue circularQueue = new MyCircularQueue(3); // 设置长度为 3
// circularQueue.enQueue(1);  // 返回 true
// circularQueue.enQueue(2);  // 返回 true
// circularQueue.enQueue(3);  // 返回 true
// circularQueue.enQueue(4);  // 返回 false，队列已满
// circularQueue.Rear();  // 返回 3
// circularQueue.isFull();  // 返回 true
// circularQueue.deQueue();  // 返回 true
// circularQueue.enQueue(4);  // 返回 true
// circularQueue.Rear();  // 返回 4

function MyCircularQueue(length){
    this.list = new Array(length)
    this.head = -1
    this.tail = -1
    this.size = length

    this.isFull = () =>{
        return ((this.tail+1)%this.size) === this.head
    }

    this.isEmpty = () => {
        return this.head === -1
    }

    this.enQueue = (value) => {
        if(this.isFull()){
            return false
        }
        
        if(this.isEmpty()){
            this.head = 0
        }

        this.tail = (this.tail+1)%this.size
        this.list[this.tail] = value
        return true
        
    }

    this.deQueue = () => {
        if(this.isEmpty()){
            return false
        }
        
        if(this.head === this.tail){
            this.head = -1
            this.tail = -1
            return true
        }

        this.head = (this.head+1)%this.size
        return true
    }

    this.Front = () => {
        if(this.isEmpty()){
            return -1
        }
        return this.list[this.head]
    }

    this.Rear = () => {
        if(this.isEmpty()){
            return -1
        }
        return this.list[this.tail]
    }

    return{
        isFull:this.isFull,
        isEmpty:this.isEmpty,
        enQueue:this.enQueue,
        deQueue:this.deQueue,
        Front:this.Front,
        Rear:this.Rear
    }
}

const circularQueue = new MyCircularQueue(3)
circularQueue.enQueue(4)
circularQueue.enQueue(5)
circularQueue.enQueue(6)
console.log('front======',circularQueue.Front())
circularQueue.deQueue()
console.log('Rear=======',circularQueue.Rear())
circularQueue.deQueue()
circularQueue.enQueue(7)
console.log('front======',circularQueue.Front())
console.log('Rear=======',circularQueue.Rear())
circularQueue.deQueue()
circularQueue.enQueue(8)

console.log(circularQueue.deQueue())

