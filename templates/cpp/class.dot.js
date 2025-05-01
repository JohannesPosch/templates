/**
 * @file {{=data.name}}.cpp
 * @brief {{=data.description || 'Implementation of the ' + data.name + ' class'}}
 * @author {{=data.author.fullName}} <{{=data.author.email}}>
 * @date {{=data.date.toISOString().split('T')[0]}}
 */

#include "{{=data.name}}.h"

{{? data.namespace }}
namespace {{=data.namespace}} {
{{?}}

// Constructor
{{=data.name}}::{{=data.name}}() {
	// TODO: Implement constructor
}

// Destructor
{{=data.name}}::~{{=data.name}}() {
	// TODO: Implement destructor
}

{{? data.namespace }}
} // namespace {{=data.namespace}}
{{?}}
