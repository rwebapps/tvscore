#This script was used to create the model that is included with the package

#General Social Survey data
#For info see http://www3.norc.org/GSS+Website/Download/SPSS+Format/
download.file("http://publicdata.norc.org/GSS/DOCUMENTS/OTHR/2012_spss.zip", destfile="2012_spss.zip")
unzip("2012_spss.zip")
GSS <- foreign::read.spss("GSS2012.sav", to.data.frame=TRUE)

#GAM model
library(mgcv)
mydata <- na.omit(GSS[c("age", "tvhours", "marital")])
tv_model <- gam(tvhours ~ s(age, by=marital), data = mydata)

#Vizualize the model
library(ggplot2)
qplot(age, predict(tv_model), color=marital, geom="line", data=mydata) +
  ggtitle("gam(tvhours ~ s(age, by=marital))") +
  ylab("Average hours of TV per day")

#Save the model
dir.create("data", showWarnings=FALSE)
save(tv_model, file="data/tv_model.rda")
