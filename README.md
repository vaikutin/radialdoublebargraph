# radialdoublebargraph
Developing radial double column bar chart.

Developing radial double column bar chart.


The radial column bar chart is used in Justbrowse for visualization of user’s gesture data (Microgestures) collected from the apps of Forethink Oy services. It is visualizing user’s preference in positive & negative ways on each product cards of a deck which is organized in a circular way. 

Sample code:
https://codepen.io/alfpooh/pen/zyPvNd

Terminology
Deck: A structured cards to run a justbrow.se service. Categorized cards is organized in a circular way.
Category: Cards are grouped into a category.
Category indicator: Indicates a category.
Card: An unit of contents. Showing products. Usually, has photo, title, description, link etc.
Like column: Displaying a Bayesian probability of likeness. Normalized from positive gestures. 0-1.0
Dislike column: Displaying a Bayesian probability of dislikeness. Normalized from negative gestures. 0-1.0
Landing card: The first card when the app is launched and highlighted.
Hero card: A representative card for a category. Access point when user browse at category level.
Limit of Like: 1.0 Maximum likeness value
Softmax: Normalization process translating values into 0-1l.
Threshold selector: To select low ranked cards which has lower dislikeness. User or AI can adjust to select cards to be dropped.

Followings are reference for visualization
1.Radial column chart
https://datavizcatalogue.com/methods/radial_column_chart.html
2.Double circular bar plot
https://www.d3-graph-gallery.com/graph/circular_barplot_double.html
3.Stacked radial bar chart
https://gist.github.com/vaikutin/65f3ef568745f21c610dc25e21b47ff9
4.Center radial bar chart
https://www.onedataset.io/blog/2017/3/3/center-radial-bar-chart
5.JchartFX
http://support.softwarefx.com/jChartFX/article/2501514
6.Radial column 
https://gist.github.com/Ewiseman/222abffe95e020bf39815ac1b0334ab5


Created by Alf Bae 07 Jan. 2019
Forethink Oy 2019.
