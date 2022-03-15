const getModalTrigger = (modalsRepeater, url, callback) => {
  filterModals(modalsRepeater, 'click').forEach((modal) =>
    modal.conditionsRepeater.find((condition) => {
      let foundTrigger = false;
      const pageCount = 3;
      const currentUrl = new URL(url);
      const prevLocation = currentUrl.search ? currentUrl.search.substring(1) : '';

      if (condition.sessionPageViews) {
        foundTrigger = (pageCount >= condition.sessionPageViews);
      }

      if (condition.excludePriorPageUrlContains) {
        foundTrigger = !urlsContainCurrentUrl(condition.excludePriorPageUrlContains, 'urlPart', prevLocation);
      }

      if(condition.includePageUrlContains) {
        foundTrigger = ( 
            urlsContainCurrentUrl(condition.includePageUrlContains, 'urlPart', currentUrl.href) || 
            urlsContainCurrentUrl(condition.includePageUrlContains, 'urlPart', currentUrl.pathname) ||
            urlsContainCurrentUrl(condition.includePageUrlContains, 'urlPart', prevLocation)
          );
      }

      if(condition.includeVisitorPageUrls) {
        foundTrigger = ( 
          urlsContainCurrentUrl(condition.includeVisitorPageUrls, 'pageUrls', currentUrl.href) || 
          urlsContainCurrentUrl(condition.includeVisitorPageUrls, 'pageUrls', currentUrl.pathname) || 
          urlsContainCurrentUrl(condition.includeVisitorPageUrls, 'pageUrls', prevLocation)
        );
      }

      if (
        foundTrigger &&
        IsExcludeOrInclude(modal.conditionsRepeater, 'Exclude')
      ) {
        foundTrigger = !urlsContainCurrentUrl(condition.excludeVisitorPageUrls, 'pageUrls', currentUrl.pathname);
      } else if (
        foundTrigger &&
        IsExcludeOrInclude(modal.conditionsRepeater, 'Include')
      ) {
        foundTrigger = urlsContainCurrentUrl(condition.includeVisitorPageUrls, 'pageUrls', currentUrl.pathname);
      }

      if (foundTrigger) {
        const data = {
          timeToWait: (condition.jsInactiveTimeToWait * 1000),
          visitorCookie: condition.excludeVisitorCookie,
          viewedPages: condition.sessionPageViews,
          showType: condition.showType
        }
        return callback(modal.ctaId, data);
      }

      return callback(null);
    })
  );
};