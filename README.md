Deploy scoring model
====================

This package illustrates how to deploy a model for remote scoring/prediction. 


    # Install in R
    library(devtools)
    install_github("opencpu/tvscore")

    # Score in R
    library(tvscore)
    mydata <- data.frame(
      age=c(24, 54, 32, 75),
      marital=c("MARRIED", "DIVORCED", "WIDOWED", "NEVER MARRIED")
    )
    tv(input = mydata)

    # Score remotely
    curl https://public.opencpu.org/ocpu/github/opencpu/tvscore/R/tv/json \
      -H "Content-Type: application/json" \
      -d '{"input" : [ {"age":26, "marital" : "MARRIED"}, {"age":41, "marital":"DIVORCED"} ]}'
      
The model is included in the `data` directory of the package, and was created
using the [createmodel.R](https://github.com/opencpu/tvscore/blob/master/inst/tv/createmodel.R) script. It predicts hours per day of TV watching from age and marital status. The model looks like this:

![model viz](https://raw.githubusercontent.com/opencpu/tvscore/master/inst/tv/viz.png)