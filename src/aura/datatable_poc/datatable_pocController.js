({
 
   doInit: function(component, event, helper) {    
      helper.getCaseList(component);   
   },
    jsLoaded : function(component, event, helper){
        alert('changed '+component.get("v.oppCompleted"));
        helper.jsLoaded(component, event, helper);
    },
    record_clicked: function(component, event, helper){
        
        	alert(event.target.id);
    },
    					   display : function(component, event, helper) {
        console.log(event.target.id);
        var toggleid = event.target.id;
    helper.toggleHelper(component, event,toggleid);
  },

  displayOut : function(component, event, helper) {
       console.log('displaying out 1');
        var toggleid = event.target.id;
   helper.toggleHelper(component, event,toggleid);
  }
  
  
})