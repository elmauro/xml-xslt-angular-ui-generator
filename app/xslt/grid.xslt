<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <xsl:for-each select="//properties">
      <xsl:variable name="entity" select="@entity" />
      <xsl:variable name="description" select="@description" />
      <xsl:variable name="translate" select="@translate" />
        <div class="panel panel-default" ng-show="showList">
          <div class="panel-body">
            <div class="row">
              <div class="col-md-4 col-xs-12 col-sm-12">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="{{{{ '{@translate}.SEARCH' | translate }}}}" ng-model="filter" ng-keypress="searchOnEnter($event)" />
                  <span class="input-group-btn">
                    <button class="btn btn-primary" type="button" ng-click="search($event)" translate="">ACTIONS.SEARCH</button>
                  </span>
                </div>
              </div>
              <div class="col-md-2 col-xs-12 col-sm-12"></div>
              <div class="col-md-4 col-xs-12 col-sm-12"></div>
              <div class="col-md-2 col-xs-12 col-sm-12">
                <button class="btn btn-primary" ngf-select="" ngf-change="upload($files)" translate="">SELECT_CSV</button>
              </div>
            </div>
            <table id="tbl{$entity}" ng-model="{@entity}" width="100%" class="table table-striped table-hover user-table-top users-panel">
              <thead>
                <tr>
                  <th ng-show="isWizard"></th>
                  <xsl:for-each select="//control">
                    <xsl:if test="@grid_visible='true'">
                      <th class="col-md-3 col-xs-6 col-sm-4" translate=""><xsl:value-of select="../properties/@translate"/>.<xsl:value-of select="@translate"/></th>
                    </xsl:if>
                  </xsl:for-each>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>  
                <tr ng-repeat="{$entity} in {$entity}s" ng-click="select{$description}({$entity}.id)" ng-model="selected" ng-class="{{success: current{$description}Id == {$entity}.id, wizardPointer: isWizard}}">
                  <td class="col-md-1 col-xs-6 col-sm-4" ng-show="isWizard">
                     <input type="radio" name="{$entity}s" value="{{{{ {$entity}.id }}}}" ng-checked="current{$description}Id == {$entity}.id" ng-show="showRadio" />
                  </td>
                  <xsl:for-each select="//control">
                    <xsl:if test="@grid_visible='true'">
                      <xsl:choose>
                        <xsl:when test="@type='select'">
                          <td class="col-md-3 col-xs-6 col-sm-4">{{<xsl:value-of select="../properties/@entity"/>.<xsl:value-of select="@field_of_query"/>}}</td>
                        </xsl:when>
                        <xsl:otherwise>
                          <td class="col-md-3 col-xs-6 col-sm-4">{{<xsl:value-of select="../properties/@entity"/>.<xsl:value-of select="@name"/>}}</td>
                        </xsl:otherwise>
                      </xsl:choose>
                    </xsl:if>
                  </xsl:for-each>
                  <td><a translate="" href="javascript:;" tooltip="{{{{ '{@translate}.EDIT' | translate }}}}" ng-click='select({@entity})'><i class="fa fa-pencil fa-lg"></i></a></td>
                  <td>
                    <a translate="" href="javascript:;" tooltip="{{{{ '{@translate}.DELETE' | translate }}}}" ng-click="delete($index)"><i class="fa fa-trash fa-lg"></i></a>
                  </td>
                </tr>
                <tr ng-show="{$entity}s.length === 0">
                  <td colspan="11" class="text-center" translate="">NO_RESULTS</td>
                </tr>
              </tbody>
              <tfoot>

              </tfoot>
            </table>
            <div class="row">
              <div class="col-md-5 col-xs-12 col-sm-10" ng-show="showPaginate">
                <pagination total-items="totalItems" max-size="maxSize" items-per-page="itemsPerPage"  ng-model="currentPage" ng-change="pageChanged()" class="pagination-sm"></pagination>
              </div>

              <div class="col-md-5 col-xs-10 col-sm-10 add-user-btn">
                <button type="button" class="btn btn-primary btn-circle btn-lg pull-right" ng-click="new{$description}()" translate="" tooltip="{{{{ '{@translate}.NEW' | translate }}}}"><i class="fa fa-plus"></i></button>
              </div>
            </div>
          </div>
        </div>
        <script type="text/ng-template" id="delete{$description}.html">
          <div class="modal-header">
              <h3 class="modal-title"></h3>
          </div>
          <div class="modal-body">
            <div>Are you sure you want to delete this <xsl:value-of select="@entity"/>?</div>
          </div>
          <div class="modal-footer">
              <button class="btn btn-primary" ng-click="ok()">Yes</button>
              <button class="btn btn-warning" ng-click="cancel()">No</button>
          </div>
        </script>
    </xsl:for-each>
  </xsl:template>
</xsl:stylesheet>
