var idMapping = {
  '': '/',
  'introduction-to-asciidoctor': '/asciidoctor/latest/',
  'what-is-asciidoctor': '/asciidoctor/latest/#what-is-asciidoctor',
  'the-big-picture': '/asciidoctor/latest/#basic-usage',
  'asciidoctor-on-the-jvm': '/asciidoctor/latest/#java-jvm',
  'asciidoctor-js': '/asciidoctor/latest/#javascript',
  'asciidoctors-most-notable-benefits': '/asciidoctor/latest/features/',
  'asciidoc-syntax-processing': '/asciidoctor/latest/#relationship-to-asciidoc',
  'compared-to-markdown': '/asciidoc/latest/asciidoc-vs-markdown/',
  'getting-your-start-with-markdown': '/asciidoc/latest/asciidoc-vs-markdown/#starting-with-markdown',
  'graduating-to-asciidoc': '/asciidoc/latest/asciidoc-vs-markdown/#graduating-to-asciidoc',
  'comparison-by-example': '/asciidoc/latest/asciidoc-vs-markdown/#comparison-by-example',
  'quick-starts': '/asciidoctor/latest/get-started/',
  'using-the-command-line-interface': '/asciidoctor/latest/cli/',
  'using-the-ruby-api': '/asciidoctor/latest/api/',
  'getting-started': '/asciidoctor/latest/get-started/',
  'system-requirements': '/asciidoctor/latest/install/supported-platforms/',
  'installing-the-asciidoctor-ruby-gem': '/asciidoctor/latest/install/',
  'install-using-gem': '/asciidoctor/latest/install/ruby-packaging/#gem-install',
  'install-using-bundler': '/asciidoctor/latest/install/ruby-packaging/#bundler',
  'install-on-fedora': '/asciidoctor/latest/install/linux-packaging/#dnf',
  'install-on-debian-or-ubuntu': '/asciidoctor/latest/install/linux-packaging/#apt',
  'install-on-alpine-linux': '/asciidoctor/latest/install/linux-packaging/#apk',
  'upgrading-the-asciidoctor-ruby-gem': '/asciidoctor/latest/install/ruby-packaging/#gem-update',
  'extensions-and-integrations': '/asciidoctor/latest/extensions/',
  'terms-and-concepts': '/asciidoc/latest/key-concepts/',
  elements: '/asciidoc/latest/key-concepts/#elements',
  'formatting-marks': '/asciidoc/latest/text/',
  'constrained-quotes': '/asciidoc/latest/text/#constrained',
  'unconstrained-quotes': '/asciidoc/latest/text/#unconstrained',
  'when-should-i-use-unconstrained-quotes': '/asciidoc/latest/text/troubleshoot-unconstrained-formatting/#use-unconstrained',
  'unconstrained-formatting-edge-cases': '/asciidoc/latest/text/troubleshoot-unconstrained-formatting/#unconstrained-edge-cases',
  'escaping-unconstrained-quotes': '/asciidoc/latest/text/troubleshoot-unconstrained-formatting/#escape-unconstrained',
  attributes: '/asciidoc/latest/key-concepts/#attributes',
  'attribute-restrictions': '/asciidoc/latest/attributes/custom-attributes/#user-defined-names',
  'attribute-assignment-precedence': '/asciidoc/latest/attributes/assignment-precedence/',
  'altering-the-attribute-assignment-precedence': '/asciidoc/latest/attributes/assignment-precedence/#altering-the-assignment-precedence',
  'using-attributes-set-assign-and-reference': '/asciidoc/latest/attributes/attribute-entries/',
  'setting-attributes-on-a-document': '/asciidoc/latest/attributes/attribute-entries/',
  'attribute-entry-use-cases': '/asciidoc/latest/attributes/document-attributes/',
  'setting-built-in-attributes': '/asciidoc/latest/attributes/built-in-attributes/',
  'setting-asset-locations': '/asciidoc/latest/attributes/custom-attributes/',
  'content-reuse': '/asciidoc/latest/attributes/custom-attributes/',
  'attribute-entry-subs': '/asciidoc/latest/attributes/attribute-entry-substitutions/',
  'altering-attribute-entry-substitutions': '/asciidoc/latest/attributes/attribute-entry-substitutions/#pass-macro',
  'splitting-attribute-values-over-multiple-lines': '/asciidoc/latest/attributes/wrap-values/',
  'attribute-limitations': '/asciidoc/latest/attributes/document-attributes/#what-does-defining-a-document-attribute-mean',
  'setting-attributes-on-an-element': '/asciidoc/latest/attributes/element-attributes/',
  'positional-attribute': '/asciidoc/latest/attributes/positional-and-named-attributes/#positional',
  'named-attribute': '/asciidoc/latest/attributes/positional-and-named-attributes/#named',
  'attribute-list-substitutions': '/asciidoc/latest/attributes/positional-and-named-attributes/#substitutions',
  style: '/asciidoc/latest/blocks/styles/',
  id: '/asciidoc/latest/attributes/ids/',
  'block-assignment': '/asciidoc/latest/attributes/ids/#block-assignment',
  'inline-assignment': '/asciidoc/latest/attributes/ids/#inline-assignment',
  role: '/asciidoc/latest/attributes/roles/',
  'block-assignment-2': '/asciidoc/latest/attributes/roles/#assign-roles-to-blocks',
  'inline-assignment-2': '/asciidoc/latest/attributes/roles/#assign-roles-to-formatted-inline-elements',
  options: '/asciidoc/latest/attributes/options/',
  'block-assignment-3': '/asciidoc/latest/attributes/options/#assign-options-to-blocks',
  'assigning-document-attributes-inline': '/asciidoc/latest/attributes/inline-attribute-entries/',
  'handle-missing-or-undefined-attributes': '/asciidoc/latest/attributes/unresolved-references/',
  'missing-attribute': '/asciidoc/latest/attributes/unresolved-references/#missing',
  'undefined-attribute': '/asciidoc/latest/attributes/unresolved-references/#undefined',
  'building-a-document': '/asciidoc/latest/document-structure/',
  'text-editor': '/asciidoc/latest/document-structure/#documents',
  'document-types': '/asciidoc/latest/document/doctypes/',
  'inline-doctype': '/asciidoc/latest/document/doctypes/#inline-doctype',
  'basic-document-anatomy': '/asciidoc/latest/document-structure/',
  'doc-header': '/asciidoc/latest/document/header/',
  'document-title': '/asciidoc/latest/document/title/',
  'doctitle-attribute': '/asciidoc/latest/document/title/#reference-doctitle',
  'document-subtitle': '/asciidoc/latest/document/subtitle/',
  'document-title-visibility': '/asciidoc/latest/document/title/#hide-or-show',
  'author-and-email': '/asciidoc/latest/document/author-information/',
  'attribute-references-in-the-author-line': '/asciidoc/latest/document/reference-author-attributes/',
  'revision-number-date-and-remark': '/asciidoc/latest/document/revision-information/',
  'subtitle-partitioning': '/asciidoc/latest/document/subtitle/#partition-the-title-using-the-api',
  metadata: '/asciidoc/latest/document/metadata/',
  description: '/asciidoc/latest/document/metadata/#description',
  keywords: '/asciidoc/latest/document/metadata/#keywords',
  'alternate-title': '/asciidoc/latest/document/title/#title-attr',
  'custom-metadata-styles-and-functions': '/asciidoc/latest/document/metadata/#custom-metadata-styles-and-functions',
  'header-summary': '/asciidoc/latest/document/header-ref/',
  'doc-preamble': '/asciidoc/latest/blocks/preamble-and-lead/',
  sections: '/asciidoc/latest/sections/titles-and-levels/',
  'titles-as-html-headings': '/asciidoc/latest/sections/titles-and-levels/#titles-as-html-headings',
  'auto-generated-ids': '/asciidoc/latest/sections/ids/',
  'custom-ids': '/asciidoc/latest/sections/custom-ids/',
  'multiple-anchors': '/asciidoc/latest/sections/custom-ids/#assign-additional-ids',
  links: '/asciidoc/latest/sections/title-links/',
  anchors: '/asciidoc/latest/sections/title-links/#anchor',
  numbering: '/asciidoc/latest/sections/numbers/',
  'numbering-depth': '/asciidoc/latest/sections/numbers/#numlevels',
  'discrete-headings': '/asciidoc/latest/sections/discrete-titles/',
  'section-styles': '/asciidoc/latest/sections/styles/',
  'sections-summary': '/asciidoc/latest/sections/section-ref/',
  blocks: '/asciidoc/latest/blocks/',
  title: '/asciidoc/latest/blocks/add-title/',
  'metadata-2': '/asciidoc/latest/blocks/assign-id/',
  'delimited-blocks': '/asciidoc/latest/blocks/build-basic-block/#delimited-blocks',
  'delimiter-lines': '/asciidoc/latest/blocks/build-basic-block/#build-a-block-using-delimiters',
  'optional-delimiters': '/asciidoc/latest/blocks/build-basic-block/#build-a-block-using-a-block-style-attribute',
  'masquerading-blocks': '/asciidoc/latest/blocks/masquerade/',
  'nesting-blocks': '/asciidoc/latest/blocks/nest/',
  'built-in-blocks-summary': '/asciidoc/latest/blocks/#block-commonalities',
  paragraph: '/asciidoc/latest/blocks/paragraphs/',
  alignment: '/asciidoc/latest/blocks/paragraph-alignment/',
  'line-breaks': '/asciidoc/latest/blocks/hard-line-breaks/',
  'lead-style': '/asciidoc/latest/blocks/preamble-and-lead/#lead-role',
  'text-formatting': '/asciidoc/latest/text/',
  'bold-and-italic': '/asciidoc/latest/text/bold/',
  curved: '/asciidoc/latest/text/quotation-marks-and-apostrophes/',
  'subscript-and-superscript': '/asciidoc/latest/text/subscript-and-superscript/',
  mono: '/asciidoc/latest/text/monospace/',
  'literal-monospace': '/asciidoc/latest/text/monospace/#literal-monospace',
  'custom-styling-with-attributes': '/asciidoc/latest/text/custom-inline-styles/',
  'unordered-lists': '/asciidoc/latest/lists/unordered/',
  nested: '/asciidoc/latest/lists/unordered/#nested-unordered-list',
  'complex-list-content': '/asciidoc/latest/lists/continuation/',
  'list-continuation': '/asciidoc/latest/lists/continuation/#list-continuation',
  'dropping-the-principal-text': '/asciidoc/latest/lists/continuation/#dropping-the-principal-text',
  'attaching-to-an-ancestor-list': '/asciidoc/latest/lists/continuation/#attaching-to-an-ancestor-list',
  'custom-markers': '/asciidoc/latest/lists/unordered/#markers',
  checklist: '/asciidoc/latest/lists/checklist/',
  'ordered-lists': '/asciidoc/latest/lists/ordered/',
  'nested-2': '/asciidoc/latest/lists/ordered/#nested-ordered-list',
  'numbering-styles': '/asciidoc/latest/lists/ordered/#styles',
  'description-list': '/asciidoc/latest/lists/description/',
  'question-and-answer-style-list': '/asciidoc/latest/lists/qanda/',
  tables: '/asciidoc/latest/tables/build-a-basic-table/',
  cols: '/asciidoc/latest/tables/add-columns/',
  'cols-format': '/asciidoc/latest/tables/format-column-content/',
  cell: '/asciidoc/latest/tables/format-cell-content/',
  'header-row': '/asciidoc/latest/tables/add-header-row/',
  'footer-row': '/asciidoc/latest/tables/add-footer-row/',
  'table-width': '/asciidoc/latest/tables/width/',
  'table-borders': '/asciidoc/latest/tables/borders/',
  frame: '/asciidoc/latest/tables/borders/#frame',
  grid: '/asciidoc/latest/tables/borders/#grid',
  striping: '/asciidoc/latest/tables/striping/',
  orientation: '/asciidoc/latest/tables/orientation/',
  'nested-tables': '/asciidoc/latest/tables/nested/',
  'table-caption': '/asciidoc/latest/tables/add-title/',
  'escaping-the-cell-separator': '/asciidoc/latest/tables/data-format/#escape-the-cell-separator',
  'delimiter-separated-values': '/asciidoc/latest/tables/data-format/#delimiter-separated-values',
  'data-table-formats': '/asciidoc/latest/tables/data-format/#data-table-formats',
  'csv-and-tsv': '/asciidoc/latest/tables/data-format/#csv-and-tsv',
  dsv: '/asciidoc/latest/tables/data-format/#dsv',
  'custom-delimiters': '/asciidoc/latest/tables/data-format/#custom-delimiters',
  'shorthand-notation-for-data-tables': '/asciidoc/latest/tables/data-format/#shorthand-notation-for-data-tables',
  'formatting-cells-in-a-data-table': '/asciidoc/latest/tables/data-format/#formatting-cells-in-a-data-table',
  'summary-tables': '/asciidoc/latest/tables/table-ref/',
  'horizontal-rules': '/asciidoc/latest/blocks/breaks/#thematic-breaks',
  'markdown-style-horizontal-rules': '/asciidoc/latest/blocks/breaks/#markdown-style-thematic-breaks',
  'page-break': '/asciidoc/latest/blocks/breaks/#page-breaks',
  url: '/asciidoc/latest/macros/links/',
  'link-to-relative-files': '/asciidoc/latest/macros/link-macro/#when-to-use-the-link-macro',
  summary: '/asciidoc/latest/macros/link-macro-ref/',
  xref: '/asciidoc/latest/macros/xref/',
  'automatic-anchors': '/asciidoc/latest/macros/xref/#anchors',
  anchordef: '/asciidoc/latest/sections/custom-ids/',
  'internal-cross-references': '/asciidoc/latest/macros/xref/#internal-cross-references',
  'validating-internal-cross-references': '/asciidoc/latest/macros/xref-validate/',
  'customizing-the-cross-reference-text': '/asciidoc/latest/macros/xref-text-and-style/',
  'inter-document-cross-references': '/asciidoc/latest/macros/inter-document-xref/',
  'navigating-between-source-files': '/asciidoc/latest/macros/inter-document-xref/#navigating-between-source-files',
  'include-directive': '/asciidoc/latest/directives/include/',
  'include-anatomy': '/asciidoc/latest/directives/include/#include-syntax',
  'include-processing': '/asciidoc/latest/directives/include/#include-processing',
  'include-resolution': '/asciidoc/latest/directives/include/#include-resolution',
  'include-partitioning': '/asciidoc/latest/directives/include-with-leveloffset/',
  'include-nonasciidoc': '/asciidoc/latest/directives/include/#include-nonasciidoc',
  'include-partial': '/asciidoc/latest/directives/include-tagged-regions/',
  'by-tagged-regions': '/asciidoc/latest/directives/include-tagged-regions/#tagging-regions',
  'tag-filtering': '/asciidoc/latest/directives/include-tagged-regions/#tag-filtering',
  'by-line-ranges': '/asciidoc/latest/directives/include-lines/',
  'normalize-block-indentation': '/asciidoc/latest/directives/include-with-indent/',
  'include-uri': '/asciidoc/latest/directives/include-uri/',
  'caching-uri-content': '/asciidoc/latest/directives/include-uri/#caching-uri-content',
  'include-multiple': '/asciidoc/latest/directives/include-multiple-times-in-same-document/',
  'include-list-content': '/asciidoc/latest/directives/include-list-item-content/',
  images: '/asciidoc/latest/macros/images/',
  'setting-the-location-of-images': '/asciidoc/latest/macros/images-directory/',
  'include-images-by-full-url': '/asciidoc/latest/macros/image-url/',
  'putting-images-in-their-place': '/asciidoc/latest/macros/image-position/',
  'positioning-attributes': '/asciidoc/latest/macros/image-position/#positioning-attributes',
  'positioning-roles': '/asciidoc/latest/macros/image-position/#positioning-roles',
  'framing-roles': '/asciidoc/latest/macros/image-position/#framing-roles',
  'control-the-float': '/asciidoc/latest/macros/image-position/#control-float',
  'sizing-images': '/asciidoc/latest/macros/image-size/',
  'width-and-height': '/asciidoc/latest/macros/image-size/#width-and-height-attributes',
  pdfwidth: '/asciidoc/latest/macros/image-size/#pdfwidth-attribute',
  scaledwidth: '/asciidoc/latest/macros/image-size/#scaledwidth-attribute',
  'image-sizing-recap': '/asciidoc/latest/macros/image-size/#image-sizing-recap',
  'taming-svgs': '/asciidoc/latest/macros/image-svg/',
  'summary-2': '/asciidoc/latest/macros/image-ref/',
  video: '/asciidoc/latest/macros/audio-and-video/#video-macro-syntax',
  'youtube-and-vimeo-videos': '/asciidoc/latest/macros/audio-and-video/#youtube-and-vimeo-videos',
  'supported-attributes': '/asciidoc/latest/macros/audio-and-video/#audio-and-video-attributes-and-options',
  audio: '/asciidoc/latest/macros/audio-and-video/',
  admonition: '/asciidoc/latest/blocks/admonitions/',
  sidebar: '/asciidoc/latest/blocks/sidebars/',
  example: '/asciidoc/latest/blocks/example-blocks/',
  'prose-excerpts-quotes-and-verses': '/asciidoc/latest/blocks/blockquotes/',
  quote: '/asciidoc/latest/blocks/blockquotes/#quoted-block',
  'quoted-paragraph': '/asciidoc/latest/blocks/blockquotes/#quoted-paragraph',
  'markdown-style-blockquotes': '/asciidoc/latest/blocks/blockquotes/#markdown-style-blockquotes',
  verse: '/asciidoc/latest/blocks/verses/',
  comments: '/asciidoc/latest/comments/',
  'controlling-your-content': '/asciidoc/latest/',
  subs: '/asciidoc/latest/subs/substitutions/',
  'special-characters': '/asciidoc/latest/subs/special-characters/',
  quotes: '/asciidoc/latest/subs/quotes/',
  'attributes-2': '/asciidoc/latest/subs/attributes/',
  replacements: '/asciidoc/latest/subs/replacements/',
  'subs-mac': '/asciidoc/latest/subs/macros/',
  'post-replacements': '/asciidoc/latest/subs/post-replacements/',
  'applying-substitutions': '/asciidoc/latest/subs/apply-subs-to-blocks/',
  'incremental-substitutions': '/asciidoc/latest/subs/apply-subs-to-blocks/#incremental',
  'applying-substitutions-to-inline-elements': '/asciidoc/latest/subs/apply-subs-to-text/',
  'preventing-substitutions': '/asciidoc/latest/subs/prevent/',
  'literal-text-and-blocks': '/asciidoc/latest/verbatim/literal-blocks/',
  'listing-blocks': '/asciidoc/latest/verbatim/listing-blocks/',
  'to-wrap-or-to-scroll': '/asciidoctor/latest/html-backend/verbatim-line-wrap/',
  passthroughs: '/asciidoc/latest/pass/pass-macro/',
  'pass-macros': '/asciidoc/latest/pass/pass-macro/#inline-passthrough-macros',
  'inline-pass-macro-and-explicit-substitutions': '/asciidoc/latest/pass/pass-macro/#inline-pass',
  'triple-plus-passthrough': '/asciidoc/latest/pass/pass-macro/#triple-plus',
  'nesting-blocks-and-passthrough-macros': '/asciidoc/latest/pass/pass-macro/#nesting-blocks-and-passthroughs',
  'pass-blocks': '/asciidoc/latest/pass/pass-block/',
  'open-blocks': '/asciidoc/latest/blocks/open-blocks/',
  'enriching-your-content': '/asciidoc/latest/',
  stem: '/asciidoc/latest/stem/stem/',
  'activating-stem-support': '/asciidoc/latest/stem/stem/#activating-stem-support',
  'stem-in': '/asciidoc/latest/stem/stem/#inline',
  'stem-bl': '/asciidoc/latest/stem/stem/#block',
  'using-multiple-stem-interpreters': '/asciidoc/latest/stem/stem/#multiple-interpreters',
  'stem-docbook': '/asciidoctor/latest/stem/docbook/',
  'user-interface-macros': '/asciidoc/latest/macros/ui-macros/',
  'keyboard-shortcuts': '/asciidoc/latest/macros/keyboard-macro/',
  'menu-selections': '/asciidoc/latest/macros/ui-macros/#menu-macro-syntax',
  'ui-buttons': '/asciidoc/latest/macros/ui-macros/#button-macro-syntax',
  icons: '/asciidoc/latest/macros/icons/',
  'admonition-icons': '/asciidoc/latest/blocks/admonitions/#enable-admonition-icons',
  'unicode-admonition-icons': '/asciidoc/latest/blocks/admonitions/#using-emoji-for-admonition-icons',
  'inline-icons': '/asciidoc/latest/macros/icon-macro/',
  'size-rotate-and-flip': '/asciidoc/latest/macros/icon-macro/#icon-macro-attributes-font-mode-only',
  'link-and-window': '/asciidoc/latest/macros/icon-macro/#link-and-window',
  'image-icon-attributes': '/asciidoc/latest/macros/icon-macro/#icon-macro-attributes-image-mode-only',
  favicon: '/asciidoctor/latest/html-backend/favicon/',
  'source-code-blocks': '/asciidoc/latest/verbatim/source-highlighter/',
  'enabling-source-highlighting': '/asciidoc/latest/verbatim/source-highlighter/#source-highlighter',
  'available-source-highlighters': '/asciidoc/latest/verbatim/source-highlighter/#available-source-highlighters',
  'applying-source-highlighting': '/asciidoc/latest/verbatim/source-highlighter/#apply-source-highlighting',
  rouge: '/asciidoctor/latest/syntax-highlighting/rouge/',
  'highlight-select-lines': '/asciidoc/latest/verbatim/highlight-lines/',
  pygments: '/asciidoctor/latest/syntax-highlighting/pygments/',
  'highlight-select-lines-2': '/asciidoc/latest/verbatim/highlight-lines/',
  'listing-pygments-style-names': '/asciidoctor/latest/syntax-highlighting/pygments/#listing-pygments-style-names',
  'using-a-custom-pygments-installation': '/asciidoctor/latest/syntax-highlighting/pygments/#using-a-custom-pygments-installation',
  coderay: '/asciidoctor/latest/syntax-highlighting/coderay/',
  'highlight-select-lines-3': '/asciidoc/latest/verbatim/highlight-lines/',
  'highlight-js': '/asciidoctor/latest/syntax-highlighting/highlightjs/',
  callouts: '/asciidoc/latest/verbatim/callouts/',
  'copy-and-paste-friendly-callouts': '/asciidoc/latest/verbatim/callouts/#copy-and-paste-friendly-callouts',
  'xml-callouts': '/asciidoc/latest/verbatim/callouts/#xml-callouts',
  'callout-icons': '/asciidoc/latest/verbatim/callouts/#callout-icons',
  'conditional-preprocessor-directives': '/asciidoc/latest/key-concepts/#preprocessor-directives',
  processing: '/asciidoc/latest/directives/conditionals/#conditional-processing',
  'ifdef-directive': '/asciidoc/latest/directives/ifdef-ifndef/#ifdef',
  'ifndef-directive': '/asciidoc/latest/directives/ifdef-ifndef/#ifndef',
  'checking-multiple-attributes-ifdef-and-ifndef-only': '/asciidoc/latest/directives/ifdef-ifndef/#checking-multiple-attributes',
  'ifeval-directive': '/asciidoc/latest/directives/ifeval/',
  anatomy: '/asciidoc/latest/directives/ifeval/#anatomy',
  values: '/asciidoc/latest/directives/ifeval/#values',
  'how-value-type-coercion-works': '/asciidoc/latest/directives/ifeval/#how-value-type-coercion-works',
  operators: '/asciidoc/latest/directives/ifeval/#operators',
  'docinfo-file': '/asciidoctor/latest/docinfo/',
  'head-docinfo-files': '/asciidoctor/latest/docinfo/#head',
  'footer-docinfo-files': '/asciidoctor/latest/docinfo/#footer',
  'naming-docinfo-files': '/asciidoctor/latest/docinfo/#naming',
  'enabling-docinfo': '/asciidoctor/latest/docinfo/#enable',
  'locating-docinfo-files': '/asciidoctor/latest/docinfo/#resolving',
  'attribute-substitution-in-docinfo-files': '/asciidoctor/latest/docinfo/#attribute-substitution',
  counters: '/asciidoc/latest/attributes/counters/',
  'structuring-navigating-and-referencing-your-content': '/asciidoc/latest/document-structure/',
  'user-colophon': '/asciidoc/latest/sections/colophon/',
  'user-toc': '/asciidoc/latest/toc/',
  'manual-placement': '/asciidoc/latest/toc/position/#at-macro',
  'left-or-right-column-layout': '/asciidoc/latest/toc/position/#side-column',
  'user-toc-title': '/asciidoc/latest/toc/title/',
  'user-toc-levels': '/asciidoc/latest/toc/section-depth/',
  'using-a-toc-with-embeddable-html': '/asciidoc/latest/toc/position/#limitations',
  'table-of-contents-summary': '/asciidoc/latest/toc/toc-ref/',
  'user-abstract': '/asciidoc/latest/sections/abstract/',
  'user-preface': '/asciidoc/latest/sections/preface/',
  'user-dedication': '/asciidoc/latest/sections/dedication/',
  'book-parts-and-chapters': '/asciidoc/latest/sections/parts/',
  'user-appendix': '/asciidoc/latest/sections/appendix/',
  'user-glossary': '/asciidoc/latest/sections/glossary/',
  'user-biblio': '/asciidoc/latest/sections/bibliography/',
  'user-index': '/asciidoc/latest/sections/',
  'index-terms': '/asciidoc/latest/sections/#index-terms',
  'index-catalog': '/asciidoc/latest/sections/#index-catalog',
  'user-footnotes': '/asciidoc/latest/macros/footnote/',
  'externalizing-a-footnote': '/asciidoc/latest/macros/footnote/#externalizing-a-footnote',
  'footnotes-in-headings': '/asciidoc/latest/macros/footnote/#footnotes-in-headings',
  'processing-your-content': '/asciidoc/latest/document-processing/',
  'selecting-an-output-format': '/asciidoctor/latest/converters/',
  html: '/asciidoctor/latest/html-backend/',
  'using-the-command-line': '/asciidoctor/latest/cli/',
  'using-the-ruby-api-2': '/asciidoctor/latest/api/',
  'styling-the-html-with-css': '/asciidoctor/latest/html-backend/default-stylesheet/',
  'managing-images': '/asciidoctor/latest/html-backend/manage-images/',
  'hl-css': '/asciidoctor/latest/html-backend/source-highlighting-stylesheets/',
  xhtml: '/asciidoctor/latest/html-backend/#xhtml',
  docbook: '/asciidoctor/latest/docbook-backend/',
  'man-pages': '/asciidoctor/latest/manpage-backend/',
  pdfs: '/asciidoctor/latest/converters/#add-on-converters',
  'preview-your-content': '/asciidoctor/latest/tooling/',
  'guardlive-viewer': '/asciidoctor/latest/tooling/',
  'cli-inputs-and-outputs': '/asciidoctor/latest/cli/output-file/',
  'process-multiple-source-files-from-the-cli': '/asciidoctor/latest/cli/process-multiple-files/',
  'specifying-an-output-file': '/asciidoctor/latest/cli/output-file/',
  'piping-content-through-the-cli': '/asciidoctor/latest/cli/io-piping/',
  'running-asciidoctor-securely': '/asciidoctor/latest/safe-modes/',
  'set-the-safe-mode-in-the-cli': '/asciidoctor/latest/cli/set-safe-mode/',
  'set-the-safe-mode-in-the-api': '/asciidoctor/latest/api/set-safe-mode/',
  'set-attributes-based-on-the-safe-mode': '/asciidoctor/latest/reference-safe-mode/',
  'customizing-your-output': '/asciidoctor/latest/html-backend/custom-stylesheet/',
  'applying-a-theme': '/asciidoctor/latest/html-backend/custom-stylesheet/',
  'stylesheet-factory': '/asciidoctor/latest/html-backend/default-stylesheet/#are-there-different-themes',
  'setting-up-the-factory': '/asciidoctor/latest/html-backend/default-stylesheet/#are-there-different-themes',
  'install-the-gems': '/asciidoctor/latest/html-backend/default-stylesheet/#are-there-different-themes',
  'build-the-stylesheets': '/asciidoctor/latest/html-backend/default-stylesheet/#are-there-different-themes',
  'creating-a-theme': '/asciidoctor/latest/html-backend/default-stylesheet/#are-there-different-themes',
  'applying-a-stylesheet': '/asciidoctor/latest/html-backend/default-stylesheet/#are-there-different-themes',
  'generate-an-html-document': '/asciidoctor/latest/html-backend/default-stylesheet/#are-there-different-themes',
  'external-preview': '/asciidoctor/latest/html-backend/default-stylesheet/#are-there-different-themes',
  'slide-decks': '/asciidoctor/latest/converters/#add-on-converters',
  'custom-backends': '/asciidoctor/latest/features/#custom-converter-or-templates',
  'storing-multiple-templates': '/asciidoctor/latest/api/load-templates/',
  'language-support': '/asciidoctor/latest/localization-support/',
  'customizing-labels': '/asciidoctor/latest/localization-support/#customizing-labels',
  translation: '/asciidoctor/latest/localization-support/#translation',
  'publishing-your-content': '/asciidoctor/latest/features/#built-in-and-add-on-converters',
  'static-website-generators': '/asciidoctor/latest/html-backend/skip-front-matter/#front-matter-for-static-site-generators',
  'front-matter-added-for-static-site-generators': '/asciidoctor/latest/html-backend/skip-front-matter/',
  'configuring-attributes-for-awestruct': 'https://github.com/graphitefriction/oscon-2013-docs-workshop/blob/master/activate-asciidoc-content.adoc#configure-asciidoctor',
  api: '/asciidoctor/latest/api/',
  'require-the-library': '/asciidoctor/latest/api/#load-and-convert-a-document-using-the-api',
  'load-and-convert-files': '/asciidoctor/latest/api/#load-and-convert-a-document-using-the-api',
  'load-and-convert-strings': '/asciidoctor/latest/api/convert-strings/',
  'embeddable-output': '/asciidoctor/latest/api/convert-strings/#embedded-output',
  'convert-inline-markup-only': '/asciidoctor/latest/api/convert-strings/#convert-inline-markup-only',
  'convert-to-docbook': '/asciidoctor/latest/api/convert-strings/#convert-to-docbook',
  'generate-an-html-toc': '/asciidoctor/latest/api/generate-html-toc/',
  'provide-custom-templates': '/asciidoctor/latest/api/load-templates/',
  extensions: '/asciidoctor/latest/extensions/',
  'extension-points': '/asciidoctor/latest/extensions/#available-extension-points',
  'example-extensions': '/asciidoctor/latest/extensions/register/',
  'preprocessor-example': '/asciidoctor/latest/extensions/preprocessor/',
  'tree-processor-example': '/asciidoctor/latest/extensions/tree-processor/',
  'postprocessor-example': '/asciidoctor/latest/extensions/postprocessor/',
  'docinfo-processor-example': '/asciidoctor/latest/extensions/docinfo-processor/',
  'block-processor-example': '/asciidoctor/latest/extensions/block-processor/',
  'compound-block-processor-example': '/asciidoctor/latest/extensions/compound-block-processor/',
  'block-macro-processor-example': '/asciidoctor/latest/extensions/block-macro-processor/',
  'inline-macro-processor-example': '/asciidoctor/latest/extensions/inline-macro-processor/',
  'include-processor-example': '/asciidoctor/latest/extensions/include-processor/',
  'build-integrations-and-implementations': '/home/#explore-asciidoctor',
  java: '/asciidoctorj/latest/',
  gradle: 'https://asciidoctor.github.io/asciidoctor-gradle-plugin/development-3.x/user-guide/',
  maven: '/maven-tools/latest/',
  'apache-ant': 'https://github.com/asciidoctor/asciidoctor-ant',
  javadoc: '/asciidoclet/latest/',
  javascript: '/asciidoctor.js/latest/',
  'conversions-and-migrations': '/asciidoctor/latest/migrate/asciidoc-py/',
  'migrating-from-asciidoc-python': '/asciidoctor/latest/migrate/asciidoc-py/',
  'command-line-interface': '/asciidoctor/latest/migrate/asciidoc-py/#processor-call',
  'help-topics': '/asciidoctor/latest/migrate/asciidoc-py/#help-topics',
  'configuration-files': '/asciidoctor/latest/migrate/asciidoc-py/#configuration-files',
  internationalization: '/asciidoctor/latest/migrate/asciidoc-py/#localization',
  themes: '/asciidoctor/latest/migrate/asciidoc-py/#themes',
  'default-html-backend': '/asciidoctor/latest/migrate/asciidoc-py/#default-html-backend',
  doctest: '/asciidoctor/latest/migrate/asciidoc-py/#doctest',
  'changed-syntax': '/asciidoctor/latest/migrate/asciidoc-py/#updated-and-deprecated-asciidoc-syntax',
  'migrate-deprecated': '/asciidoctor/latest/migrate/asciidoc-py/#updated-and-deprecated-asciidoc-syntax',
  'migrate-stylesheet': '/asciidoctor/latest/migrate/asciidoc-py/#migrate-stylesheet',
  'mathematical-expressions': '/asciidoctor/latest/migrate/asciidoc-py/#mathematical-expressions',
  'migrate-extensions': '/asciidoctor/latest/migrate/asciidoc-py/#migrate-extensions',
  'custom-extensions': '/asciidoctor/latest/migrate/asciidoc-py/#custom-extensions',
  'features-introduced-by-asciidoctor': '/asciidoctor/latest/migrate/asciidoc-py/#updated-and-deprecated-asciidoc-syntax',
  'new-syntax': '/asciidoctor/latest/migrate/asciidoc-py/#updated-and-deprecated-asciidoc-syntax',
  enhancements: '/asciidoctor/latest/migrate/asciidoc-py/#updated-and-deprecated-asciidoc-syntax',
  'recommended-practices': '/asciidoctor/latest/migrate/asciidoc-py/#updated-and-deprecated-asciidoc-syntax',
  'convert-docbook-xml-to-asciidoc': '/asciidoctor/latest/migrate/docbook-xml/',
  'convert-markdown-to-asciidoc': '/asciidoctor/latest/migrate/markdown/',
  'convert-confluence-xhtml-to-asciidoc': '/asciidoctor/latest/migrate/confluence-xhtml/',
  'convert-ms-word-to-asciidoc': '/asciidoctor/latest/migrate/ms-word/',
  resources: '/about/support/',
  'copyright-and-license': 'https://github.com/asciidoctor/asciidoctor#copyright-and-license',
  authors: 'https://github.com/asciidoctor/asciidoctor#authors',
  troubleshoot: 'https://asciidoctor.org/docs/faq/#troubleshooting',
  glossary: '/asciidoc/latest/glossary/',
  'attribute-catalog': '/asciidoc/latest/attributes/document-attributes-reference/',
  'env-attributes': '/asciidoc/latest/attributes/document-attributes-reference/#intrinsic-attributes',
  'builtin-attributes': '/asciidoc/latest/attributes/document-attributes-reference/',
  'charref-attributes': '/asciidoc/latest/attributes/character-replacement-reference/',
  'cli-options': '/asciidoctor/latest/cli/options/',
  'security-settings': '/asciidoctor/latest/cli/options/#security-settings',
  'document-settings': '/asciidoctor/latest/cli/options/#document-settings',
  'document-conversion': '/asciidoctor/latest/cli/options/#document-conversion',
  'processing-information': '/asciidoctor/latest/cli/options/#processing-information',
  'program-information': '/asciidoctor/latest/cli/options/#program-information',
  'ruby-api-options': '/asciidoctor/latest/api/options/',
  'app-messages': '/asciidoctor/latest/errors-and-warnings/',
  'asciidoc-vs-markdown': '/asciidoc/latest/asciidoc-vs-markdown/#asciidoc-vs-markdown',
  'constrained-or-unconstrained': '/asciidoc/latest/text/troubleshoot-unconstrained-formatting/#use-unconstrained',
  'separating-lists': '/asciidoc/latest/lists/unordered/#separating-lists',
  'three-hybrid': '/asciidoc/latest/lists/description/#three-hybrid',
  'cols-align': '/asciidoc/latest/tables/align-by-column/',
  'cols-style': '/asciidoc/latest/tables/format-column-content/',
  'pipe-in-table-cell': '/asciidoc/latest/tables/data-format/#escape-the-cell-separator',
  schemes: '/asciidoc/latest/macros/autolinks/#url-schemes-for-autolinks',
  'complex-urls': '/asciidoc/latest/macros/complex-urls/',
  'link-macro-attributes': '/asciidoc/latest/macros/link-macro-ref/',
  'img-sunset': '/asciidoc/latest/macros/images/#img-sunset',
  'caution-vs-warning': '/asciidoc/latest/blocks/admonitions/#caution-vs-warning',
  'char-ref-sidebar': '/asciidoc/latest/subs/replacements/#char-ref-sidebar',
  'syntax-highlighting': '/asciidoc/latest/verbatim/source-highlighter/',
  'src-listing': '/asciidoc/latest/verbatim/source-highlighter/#hello',
  'style-nest-doc': '/asciidoctor/latest/html-backend/custom-stylesheet/#styles-directory-and-nested-documents-when-linking',
  'env-attributes-table': '/asciidoc/latest/attributes/document-attributes-reference/#intrinsic-attributes',
  'builtin-attributes-table': '/asciidoc/latest/attributes/document-attributes-reference/',
  'charref-attributes-table': '/asciidoc/latest/attributes/character-replacement-reference/',
  'builtin-attributes-i18n': '/asciidoc/latest/attributes/document-attributes-reference/#builtin-attributes-i18n',
  'catch-a-missing-or-undefined-attribute': '/asciidoc/latest/attributes/unresolved-references/#undefined'
}
var hash = window.location.hash
var url = idMapping[hash.substr(1)] || idMapping[''].concat(hash)
window.location.href = (url.substr(0, 8) === 'https://' ? '' : 'https://docs.asciidoctor.org').concat(url)
