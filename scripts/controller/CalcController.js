class CalcController{

    constructor(){

        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._timeEl = document.querySelector("#hora");
        this._dateEl = document.querySelector("#data");
        this._currentDate;
        this.initialize();
    }

    initialize(){
        setInterval(() =>{
            this.displayCalc = this.currentDate.toLocaleDateString(this._locale);
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
        })        
      

    };

    

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(value){
        this._displayCalc = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this.currentDate = value;
    }
     get displayTime(){
         return this_timeEl.innerHTML;

     }

     set displayTime(value){
        return this_timeEl.innerHTML = value;

    }

      get displayDate(){
          return this_dateEl.innerHTML;

      }

      set displayDate(value){
        return this_dateEl.innerHTML = value;

    }

}