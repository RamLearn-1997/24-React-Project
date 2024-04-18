

const dummyApiResponse = {
    showLightandDarkMode : true,
    showCustomTab: true
}

function featureFlagsDataServiceCall(){

    return new Promise((resolve, reject)=>{
          if(dummyApiResponse){
            setTimeout(resolve(dummyApiResponse),500);
          }else
          {
            reject('Some Error Occured! Please try again')
          }
    });
}

export default featureFlagsDataServiceCall;