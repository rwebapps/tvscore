#This file is not part of the package
#It was used to create the model object

#General Social Survey data
#For info see http://www3.norc.org/GSS+Website/Download/SPSS+Format/
download.file("http://publicdata.norc.org/GSS/DOCUMENTS/OTHR/2012_spss.zip", destfile="2012_spss.zip")
unzip("2012_spss.zip")
GSS <- foreign::read.spss("GSS2012.sav", to.data.frame=TRUE)

#Variable names: http://www3.norc.org/GSS+Website/Browse+GSS+Variables/Mnemonic+Index/
library(splines)
mydata <- na.omit(GSS[c("age", "tvhours", "marital")])
mymodel <- glm(tvhours ~ bs(age, 3) * marital , data = mydata)

#Vizualize the model
library(ggplot2)
qplot(age, predict(mymodel), color=marital, geom="line", data=mydata, main="example model") +
  ylab("Average hours of TV per day")

#Save the model
dir.create("data", showWarnings=FALSE)
save(mymodel, file="data/mymodel.rda")
