#' Score the TV watching model
#' 
#' Simple model with two predictor \code{age} (value between 20 and 80) and \code{marital} 
#' ("MARRIED", 'DIVORCED", "WIDOWED or "NEVER MARRIED").
#' 
#' @export
#' @importFrom stats predict
#' @param input data passed on as \code{newdata} to \code{\link{predict}}
#' @examples mydata <- data.frame(
#'    age=c(24, 54, 32, 75),
#'    marital=c("MARRIED", "DIVORCED", "WIDOWED", "NEVER MARRIED")
#' )
#' tv(mydata)
tv <- function(input){
  #input can either be csv file or data	
  if(is.character(input) && file.exists(input)){
  	newdata <- read.csv(input)
  } else {
  	newdata <- as.data.frame(input)
  }
  input$age <- as.numeric(input$age)

  #tv_model is included with the package
  predict(tv_model, newdata = newdata)
}
