import React, {  useState  } from 'react';
import './Bmi.scss';

 

const  Bmi = (props) => {
 
    // Set State Params With Default Values

    const [unit_imperial, setUnit_imperial] = useState(false);
    const [weight, setWeight] = useState(80);
    const [height, setHeight] = useState(180);
    const [bmi, setBmi] = useState();
    const [bmiType, setBmitype] = useState('Normal Weight');
    const xClass= props.className || '' ;

 

 
   // Calculate Bmi Value With Metric And Imperial Formula
   const  getBmiVal = () => {
        
        let bmivalue ='';
    
        if (unit_imperial) {
        bmivalue = ((weight / (height * height))  * 703 ).toFixed(2);
      
        } else {
         bmivalue = ((weight / (height * height)) * 10000).toFixed(2);
        }

        setBmi(bmivalue);
        setBmitype(getBmiType(bmivalue));  
        
   }
    

   const   getBmiType = (bmivalue) => {
        if (bmivalue < 18.5) return ('Underweight');
        if (bmivalue >= 18.5 && bmivalue <= 24.9) return ('Normal Weight');
        if (bmivalue >= 25 && bmivalue <= 29.9) return ('Overweight') ;
        if (bmivalue >= 30) return ('Obese') ;
      }


    const getStyles = type => {
      switch (type) {
        case "Underweight":
          return "underweight";
        case "Normal Weight":
          return "normal";
        case "Overweight":
          return "overweight";
        case "Obese":
          return "obese";
        default:
          return "normal";
      }
    };


      
        return (
                <div className={`calculator ${ xClass }`}>
                  <h3>BMI Healthy Weight Calculator</h3>
                  { bmi && 
                  <div
                    className={`bmi-result-container ${getStyles(bmiType)} `}
                  >
                    <div className="bmi-result">
                      <div className="bmi-result-number">
                        Body Mass Index (BMI) = {bmi}
                      </div>
                      <div>{bmiType}</div>
                    </div>
                  </div>
                  }
                  <div className="bmi-input">
                  <div className="input-group">
                        <span className="label fullwidth">Convert Units To Inch/Lb:</span>
                        <input
                          type="checkbox"
                          value=""
                          id="checkbox1"
                          data-toggle="checkbox"
                          className="custom-checkbox"
                          onChange={() => {
                            setUnit_imperial(!unit_imperial);
                          }}
                        />
                      </div>

                      <div className="input-group">
                        <span className="label">
                          Height ({unit_imperial ? "Inch" : "Cm"}):
                        </span>

                        <div className="range-container">
                          <div className="form-group has-success">
                            <input
                              type="text"
                              value={height}
                              placeholder={`180 ( ${
                                unit_imperial ? "Inch" : "Cm"
                              } )`}
                              className="form-control"
                              onChange={e => setHeight(e.target.value)}
                            />
                            <span className="input-icon fui-check-inverted"></span>
                          </div>
                        </div>
                      </div>

                      <div className="input-group">
                        <span className="label">
                          Weight ({unit_imperial ? "Lb" : "Kg"}):
                        </span>
                        <div className="range-container">
                          <div className="form-group has-success">
                            <input
                              type="text"
                              value={weight}
                              placeholder={`80 ( ${
                                unit_imperial ? "Lb" : "Kg"
                              } )`}
                              className="form-control"
                              onChange={e => setWeight(e.target.value)}
                            />
                            <span className="input-icon fui-check-inverted"></span>
                          </div>
                        </div>
                     
                  
                  </div>
                  <div className="bmi-input">
                    <button className="button" onClick={() => getBmiVal()}>
                      Calculate
                    </button>
                  </div>
                </div>
              </div>
        );
   
}

export  default Bmi;