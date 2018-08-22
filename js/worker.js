class controller{

    constructor(options){
        this.el = options.el;
        this.ball = this.el.querySelector('.ball');
        this.timeMove = 10;
        this.bolStartPosition = {
                                top_update: 1.56,
                                left_update: 1.56};
        this.MAX = { top_max: 15,
                      top_min: 628,
                      left_max: 270,
                      left_min: 1212};

        this.el.addEventListener('click', this.getStatus.bind(this));

        // this.movement(this.timeMove);

    }
    getStatus(){
        this.position = this.ball.getBoundingClientRect();
        if ((this.MAX.left_min>=this.position.left>=this.MAX.left_max) &&
            (this.MAX.top_min>=this.position.bottom>=this.MAX.top_max)){


            this.ball.style.left = this.position.left + this.bolStartPosition.left_update  + 'px';
            this.ball.style.top = this.position.bottom + this.bolStartPosition.left_update -50 + 'px';
        }

        console.log('left:' + this.position.left + '|bottom:' + this.position.bottom);

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