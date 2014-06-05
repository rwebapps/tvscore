Deploy scoring model
====================

This package illustrates how to deploy a model for remote scoring/prediction. 


    # Install in R
    library(devtools)
    install_github("jeroenooms/scoring")

    # Score in R
    library(scoring)
    mydata <- data.frame(
      age=c(24, 54, 32, 75),
      marital=c("MARRIED", "DIVORCED", "WIDOWED", "NEVER MARRIED")
    )
    tv(input = mydata)

    # Score remotely
    curl https://public.opencpu.org/ocpu/github/jeroenooms/scoring/R/tv/json \
      -H "Content-Type: application/json" \
      -d '{"input" : [ {"age":26, "marital" : "MARRIED"}, {"age":41, "marital":"DIVORCED"} ]}'
      
The model is included in the `data` directory in the source package. It was created
using the [createmodel.R](https://github.com/jeroenooms/scoring/blob/master/createmodel.R) script.