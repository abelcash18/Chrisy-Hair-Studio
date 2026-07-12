    const send = () => parent.postMessage(
      {
        type: 'web_page_metrics',
        height: document.body.scrollHeight,
        width: document.body.scrollWidth,
        kind: 'static'
      },
      '*'
    );
    window.addEventListener('load', send);
    new ResizeObserver(send).observe(document.documentElement);