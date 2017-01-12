<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <xsl:for-each select="//properties">
      <xsl:variable name="description" select="@description" />
        <nav class="navbar navbar-inverse">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="/"><xsl:value-of select="@description"/></a>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                <ul class="nav navbar-nav collapse navbar-collapse navbar">
                    <xsl:for-each select="//menu">  
                      <xsl:if test="@url=''"> 
                        <li class="dropdown">                  
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><span translate=""><xsl:value-of select="@translate"/></span></a>
                          <ul class="dropdown-menu">
                            <xsl:for-each select="submenu">  
                              <li><a ui-sref="UIApp.{@url}"><span translate=""><xsl:value-of select="@translate"/></span></a></li>
                            </xsl:for-each>
                          </ul>
                        </li>
                      </xsl:if> 
                      <xsl:if test="@url!=''">                   
                        <li><a ui-sref="UIApp.{@url}"><span translate=""><xsl:value-of select="@translate"/></span></a></li>
                      </xsl:if>
                    </xsl:for-each>
                </ul>
                <ul class="nav navbar-nav navbar-right collapse navbar-collapse">
                  <li class="dropdown">
                    <a translate="" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">LANGUAGE <span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                      <li ng-click="changeLanguage('en'); confirmModal('sm', 'en');" role="presentation"><a translate="" role="menuitem" tabindex="-1">ENGLISH</a></li>
                      <li ng-click="changeLanguage('es'); confirmModal('sm', 'es');" role="presentation"><a translate="" role="menuitem" tabindex="-1">SPANISH</a></li>
                      <li ng-click="changeLanguage('it'); confirmModal('sm', 'it');" role="presentation"><a translate="" role="menuitem" tabindex="-1">ITALIAN</a></li>
                      <li ng-click="changeLanguage('fr'); confirmModal('sm', 'fr');" role="presentation"><a translate="" role="menuitem" tabindex="-1">FRENCH</a></li>
                      <li ng-click="changeLanguage('de'); confirmModal('sm', 'de');" role="presentation"><a translate="" role="menuitem" tabindex="-1">GERMAN</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="" ng-click="logout()" id="btn-logout">
                      <i class="glyphicon glyphicon-off"></i>
                      <span translate="">USER.LOG_OUT</span>
                    </a>
                  </li>
                </ul>
                <ul class="nav navbar-nav navbar-right collapse navbar-collapse">
                  <li class="dropdown">
                    <!--<a id="btn-nav" href="#" data-target="#" class="dropdown-toggle" data-toggle="dropdown">
                      <i class="glyphicon glyphicon-user"></i>
                      <span translate="" >USER.WELCOME</span>, {{username}} <span class="caret"></span>
                    </a>-->
                    <ul class="dropdown-menu" role="menu">
                      <li><a ui-sref="UIApp.user-settings"><i class="glyphicon glyphicon-cog"></i> <span translate="">USER.SETTINGS</span></a></li>
                      <li><a href="#"><i class="glyphicon glyphicon-envelope"></i> <span translate="">USER.CONTACT_SUPPORT</span></a></li>
                      <li class="divider"></li>
                      <li><a translate="" ui-sref="UIApp.about">ABOUT</a></li>
                      <li><a translate="" ui-sref="UIApp.help">HELP</a></li>
                      <li><a translate="" href="#">MANUAL</a></li>
                      <li class="divider"></li>

                    </ul>
                  </li>
                </ul>
            </div>
        </div>
        </nav>
    </xsl:for-each>
  </xsl:template> 
</xsl:stylesheet>
