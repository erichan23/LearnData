const e=JSON.parse('{"key":"v-06c25741","path":"/services/dockers-on-nas/reverse-proxy.html","title":"反向代理：Nginx Proxy Manager","lang":"zh-CN","frontmatter":{"article":false,"title":"反向代理：Nginx Proxy Manager","order":99,"description":"反向代理是一种方便的后端工具，其作用是拦截所有传入请求并进行统一的转发管理。在 Docker 容器管理领域，使用反向代理可以让你摆脱繁琐的端口号记忆，只需通过不同的域名即可访问特定的 Docker 服务。常见的反向代理工具包括 Nginx Proxy Manager、nginxWebUI、Caddy 和 Lucky。 Nginx Proxy Manager Nginx Proxy Manager 具备图形用户界面，其 SSL 证书有效期为 3 个月，到期时会自动续期。由于国内家用宽带不支持 80 和 443 端口，因此这里未采用 Nginx Proxy Manager 官方容器，同时由于端口原因也不建议使用 Caddy。如果你对 Nginx Proxy Manager 不熟悉，也可以尝试国内开发的nginxWebUI，它同样集成了图形化配置、SSL 证书申请、自动续签 SSL 证书等功能。","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/dockers-on-nas/reverse-proxy.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"反向代理：Nginx Proxy Manager"}],["meta",{"property":"og:description","content":"反向代理是一种方便的后端工具，其作用是拦截所有传入请求并进行统一的转发管理。在 Docker 容器管理领域，使用反向代理可以让你摆脱繁琐的端口号记忆，只需通过不同的域名即可访问特定的 Docker 服务。常见的反向代理工具包括 Nginx Proxy Manager、nginxWebUI、Caddy 和 Lucky。 Nginx Proxy Manager Nginx Proxy Manager 具备图形用户界面，其 SSL 证书有效期为 3 个月，到期时会自动续期。由于国内家用宽带不支持 80 和 443 端口，因此这里未采用 Nginx Proxy Manager 官方容器，同时由于端口原因也不建议使用 Caddy。如果你对 Nginx Proxy Manager 不熟悉，也可以尝试国内开发的nginxWebUI，它同样集成了图形化配置、SSL 证书申请、自动续签 SSL 证书等功能。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-14T06:10:11.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2023-12-14T06:10:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"反向代理：Nginx Proxy Manager\\",\\"description\\":\\"反向代理是一种方便的后端工具，其作用是拦截所有传入请求并进行统一的转发管理。在 Docker 容器管理领域，使用反向代理可以让你摆脱繁琐的端口号记忆，只需通过不同的域名即可访问特定的 Docker 服务。常见的反向代理工具包括 Nginx Proxy Manager、nginxWebUI、Caddy 和 Lucky。 Nginx Proxy Manager Nginx Proxy Manager 具备图形用户界面，其 SSL 证书有效期为 3 个月，到期时会自动续期。由于国内家用宽带不支持 80 和 443 端口，因此这里未采用 Nginx Proxy Manager 官方容器，同时由于端口原因也不建议使用 Caddy。如果你对 Nginx Proxy Manager 不熟悉，也可以尝试国内开发的nginxWebUI，它同样集成了图形化配置、SSL 证书申请、自动续签 SSL 证书等功能。\\"}"]]},"headers":[{"level":2,"title":"Nginx Proxy Manager","slug":"nginx-proxy-manager","link":"#nginx-proxy-manager","children":[]},{"level":2,"title":"Caddy","slug":"caddy","link":"#caddy","children":[]}],"git":{"createdTime":1702534211000,"updatedTime":1702534211000,"contributors":[{"name":"erichan23","email":"153800002+erichan23@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.11,"words":633},"filePathRelative":"services/dockers-on-nas/reverse-proxy.md","localizedDate":"2023年12月14日","excerpt":"<p>反向代理是一种方便的后端工具，其作用是拦截所有传入请求并进行统一的转发管理。在 Docker 容器管理领域，使用反向代理可以让你摆脱繁琐的端口号记忆，只需通过不同的域名即可访问特定的 Docker 服务。常见的反向代理工具包括 Nginx Proxy Manager、nginxWebUI、Caddy 和 Lucky。</p>\\n<h2> Nginx Proxy Manager</h2>\\n<p><a href=\\"https://github.com/jlesage/docker-nginx-proxy-manager\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Nginx Proxy Manager</a> 具备图形用户界面，其 SSL 证书有效期为 3 个月，到期时会自动续期。由于国内家用宽带不支持 80 和 443 端口，因此这里未采用 Nginx Proxy Manager 官方容器，同时由于端口原因也不建议使用 Caddy。如果你对 Nginx Proxy Manager 不熟悉，也可以尝试国内开发的<a href=\\"https://www.nginxwebui.cn/product.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">nginxWebUI</a>，它同样集成了图形化配置、SSL 证书申请、自动续签 SSL 证书等功能。</p>","autoDesc":true}');export{e as data};
