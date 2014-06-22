.onLoad <- function(lib, pkg){
  #force loading of tv_model when package loads
  data(tv_model, package=pkg)
}
