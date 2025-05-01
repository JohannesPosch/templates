using System;

namespace {{=data.namespace}}
{
    /// <summary>
    /// Interface for {{=data.name}}
    /// </summary>
    public interface I{{=data.name}}
    {
        // Properties

        /// <summary>
        /// Gets or sets the name
        /// </summary>
        string Name { get; set; }

        // Methods

        /// <summary>
        /// Initializes the instance
        /// </summary>
        /// <returns>True if initialization was successful, false otherwise</returns>
        bool Initialize();

        /// <summary>
        /// Cleans up resources
        /// </summary>
        void Cleanup();
    }
}
