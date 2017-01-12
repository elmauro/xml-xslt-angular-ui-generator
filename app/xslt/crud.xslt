<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <xsl:for-each select="//properties">
      <xsl:variable name="entity" select="@entity" />
      <xsl:variable name="description" select="@description" />
      <xsl:variable name="translate" select="@translate" />
        <div ng-show="isNew" class="panel panel-default col-md-6">
          <div class="panel-body">

            <div class="alert alert-danger" role="alert" ng-show="showMessage">
              <button type="button" class="close" ng-click="showMessage=false"  aria-label="Close">
                <span aria-hidden="true">times</span>
              </button>
              <p ng-repeat="error in errors">
              <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span class="sr-only">Error:</span>
              {{error[0] | translate}}</p>
            </div>

            <div class="alert alert-success" role="alert" ng-show="showSuccess">
              <button type="button" class="close" ng-click="showSuccess=false"  aria-label="Close">
                <span aria-hidden="true"></span>
              </button>
              <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span class="sr-only"></span>{{successMessage}}
            </div>

            <div class="row">
              <div class="modal-header">
                  <h3 class="modal-title">{{Action}}</h3>
              </div>
              <div class="modal-body">

                 <form class="form-horizontal" role="form">
                  <xsl:for-each select="//control">
                    <xsl:if test="@visible='true'">
                      <div class="form-group">
                        <label translate="" for="name" class="col-lg-2 control-label"><xsl:value-of select="../properties/@translate"/>.<xsl:value-of select="@translate"/></label>

                        <xsl:if test="@type='text'">
                          <div class="col-lg-10">
                            <input type="text" class="form-control" id="{@name}" placeholder="{{{{ '{$translate}.{@translate}' | translate }}}}" ng-model="{$entity}.{@name}" />
                          </div>
                        </xsl:if>

                        <xsl:if test="@type='checkbox'">
                          <div class="col-lg-10">
                            <div class="checkbox">
                              <label>
                                <input type="checkbox" value="" ng-model="{$entity}.{@name}" /> <span translate=""> <xsl:value-of select="../properties/@translate"/>.<xsl:value-of select="@text"/> </span>
                              </label>
                            </div>
                          </div>
                        </xsl:if>

                        <xsl:if test="@type='select'">
                          <div class="col-lg-10">
                            <select class="form-control" ng-model="{$entity}.{@name}">
                                <option ng-repeat="{@name}Type in {@name}" translate="" value="{{{{ {@name}Type.id }}}}">{{ <xsl:value-of select="@name"/>Type.<xsl:value-of select="@field_of_select"/> }}</option>
                            </select>
                          </div>
                        </xsl:if>

                        <xsl:if test="@type='button'">
                          <div class="col-lg-10">
                            <button class="btn btn-primary">Button Test</button>

                          </div>
                        </xsl:if>

                        <xsl:if test="@type='textarea'">
                          <div class="col-lg-10">
                            <input type="textarea" class="form-control" rows="4" cols="50"/>
                          </div>
                        </xsl:if>
                      </div>
                    </xsl:if>
                  </xsl:for-each>
                </form>
              </div>
              <div class="modal-footer">
                  <button translate="" class="btn btn-primary" ng-click="save({$entity})"><xsl:value-of select="../properties/@translate"/>.SAVE</button>
                  <button translate="" class="btn btn-warning" ng-click="cancel()"><xsl:value-of select="../properties/@translate"/>.CANCEL</button>
              </div>
            </div>
          </div>
        </div>
    </xsl:for-each>
  </xsl:template>
</xsl:stylesheet>
