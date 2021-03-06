  <?php include("header.tpl.php"); ?>
    
  <?php if (!empty($page['featured'])): ?>
    <!--/.featured -->
    <section class="l-featured row">
      <div class="large-12 columns">
        <?php print render($page['featured']); ?>
      </div>
    </section>
    <!--/.l-featured -->
  <?php endif; ?>
  
  <?php if (!empty($page['wide_region'])): ?>
  <div class="wide-region">
    <?php print render($page['wide_region']); ?>
  </div>
  <?php endif; ?>

  <?php if (!empty($page['help'])): ?>
    <!--/.l-help -->
    <section class="l-help row">
      <div class="large-12 columns">
        <?php print render($page['help']); ?>
      </div>
    </section>
    <!--/.l-help -->
  <?php endif; ?>

  <div role="main" class="portfolio-drag clearfix">
    <div class=" main columns">
      <?php if (!empty($page['highlighted'])): ?>
        <div class="highlight panel callout">
          <?php print render($page['highlighted']); ?>
        </div>
      <?php endif; ?>

      <a id="main-content"></a>

      <?php if ($action_links): ?>
        <ul class="action-links">
          <?php print render($action_links); ?>
        </ul>
      <?php endif; ?>
    <div class="row">      
       <?php if (!empty($page['before_content'])): ?>
        <div role="complementary" class="large-12 columns">
          <?php print render($page['before_content']); ?>
        </div>
      <?php endif; ?>
    </div>
      <?php if(!drupal_is_front_page()) print render($page['content']); ?>
    </div>
    <!--/.main region -->
  </div>
  <!--/.main-->

  <?php if (!empty($page['triptych_first']) || !empty($page['triptych_middle']) || !empty($page['triptych_last'])): ?>
    <!--.triptych-->
    <section class="l-triptych row">
      <div class="triptych-first large-4 columns">
        <?php print render($page['triptych_first']); ?>
      </div>
      <div class="triptych-middle large-4 columns">
        <?php print render($page['triptych_middle']); ?>
      </div>
      <div class="triptych-last large-4 columns">
        <?php print render($page['triptych_last']); ?>
      </div>
    </section>
    <!--/.triptych -->
  <?php endif; ?>
  
  <?php if (!empty($page['before_footer'])): ?>   
      <div class="before-footer" role="complementary" >
        <?php print render($page['before_footer']); ?>
      </div>   
  <?php endif; ?>

  <?php if (!empty($page['footer_firstcolumn']) || !empty($page['footer_secondcolumn']) || !empty($page['footer_thirdcolumn']) || !empty($page['footer_fourthcolumn'])): ?>
    <!--.footer-columns -->
    <section class="l-footer-columns">
      <div class="row">
        <?php if (!empty($page['footer_firstcolumn'])): ?>
          <div class="footer-first large-3 columns">
            <?php print render($page['footer_firstcolumn']); ?>
          </div>
        <?php endif; ?>
        <?php if (!empty($page['footer_secondcolumn'])): ?>
          <div class="footer-second large-3 columns">
            <?php print render($page['footer_secondcolumn']); ?>
          </div>
        <?php endif; ?>
        <?php if (!empty($page['footer_thirdcolumn'])): ?>
          <div class="footer-third large-3 columns">
            <?php print render($page['footer_thirdcolumn']); ?>
          </div>
        <?php endif; ?>
        <?php if (!empty($page['footer_fourthcolumn'])): ?>
          <div class="footer-fourth large-3 columns">
            <?php print render($page['footer_fourthcolumn']); ?>
          </div>
        <?php endif; ?>
      </div>
    </section>
    <!--/.footer-columns-->
  <?php endif; ?>

  <!--.l-footer-->
  <footer class="l-footer panel" role="contentinfo">
    <div class="row">
      <?php if (!empty($page['footer'])): ?>
        <div class="footer large-6 columns">
          <?php print render($page['footer']); ?>
        </div>
      <?php endif; ?>
  
      <?php if ($site_name) :?>
        <div class="copyright large-6 text-right columns">
          &copy; <?php print date('Y') . ' ' . check_plain($site_name) . ' ' . t('All rights reserved.'); ?>
        </div>
      <?php endif; ?>
    </div>
  </footer>
  <!--/.footer-->

  <?php if ($messages && $zurb_foundation_messages_modal): print $messages; endif; ?>
</div>
<!--/.page -->
