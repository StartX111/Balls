class controller{

    constructor(options){
        this.el = options.el;
        this.theBall = this.el.querySelector('.ball');
        this.ballOptions = {
            leftState: true,
            topState: true,
            top_update: 1.56,
            left_update: 1.56,
            top_min: 15,
            top_max: 628,
            left_min: 270,
            left_max: 1212
        };

        this.el.addEventListener('click', this.getStatus.bind(this));

        setInterval(this.getStatus.bind(this), 50)
    }
    getStatus(){
        let currentPosition = this.theBall.getBoundingClientRect();
        if (this.ballOptions.leftState){
            if (currentPosition.left + this.ballOptions.left_update < this.ballOptions.left_max){
                this.theBall.style.left = currentPosition.left + this.ballOptions.left_update + 'px';
            } else {
                this.ballOptions.leftState = false;
                this.ballOptions.left_update = Math.random()*10;
            }
        } else {
            if (currentPosition.left - this.ballOptions.left_update > this.ballOptions.left_min){
                this.theBall.style.left = currentPosition.left - this.ballOptions.left_update + 'px';
            } else {
                this.ballOptions.leftState = true;
                this.ballOptions.left_update = Math.random()*10;
            }
        }
        if (this.ballOptions.topState){
            if (currentPosition.top + this.ballOptions.top_update < this.ballOptions.top_max){
                this.theBall.style.top = currentPosition.top + this.ballOptions.top_update + 'px';
            } else {
                this.ballOptions.topState = false;
                this.ballOptions.top_update = Math.random()*10;
            }
        } else {
            if (currentPosition.top - this.ballOptions.top_update > this.ballOptions.top_min){
                this.theBall.style.top = currentPosition.top - this.ballOptions.top_update + 'px';
            } else {
                this.ballOptions.topState = true;
                this.ballOptions.top_update = Math.random()*10;
            }
        }

    }



    movement(stateTime){
        if (stateTime>0){//если есть скорость, то движемся, иначе стоим
            if (MAX.left_min < this.ball.positionX < MAX.left_max){
                this.ball.positionX = this.bolStartPosition.left * this.bolStartPosition.left_update;
            }
            if (MAX.top_min < this.ball.positionY < MAX.top_max){
                this.ball.positionY = this.bolStartPosition.top * this.bolStartPosition.top_update;
            }
        }
    }

}