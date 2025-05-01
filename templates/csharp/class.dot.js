using System;
{{? data.includeInterface }}
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
{{?}}

namespace {{=data.namespace}}
{
    /// <summary>
    /// {{=data.description || data.name + ' class'}}
    /// </summary>
    {{? data.includeInterface }}
    public class {{=data.name}} : {{=data.interfaceName}}
    {{??}}
    public class {{=data.name}}
    {{?}}
    {
        #region Fields

        // TODO: Declare fields

        #endregion

        #region Properties

        // TODO: Declare properties

        #endregion

        #region Constructors

        {{? data.includeConstructor }}
        /// <summary>
        /// Initializes a new instance of the <see cref="{{=data.name}}"/> class.
        /// </summary>
        public {{=data.name}}()
        {
            // TODO: Initialize instance
        }
        {{?}}

        #endregion

        #region Methods

        // TODO: Implement methods

        #endregion
    }
}
