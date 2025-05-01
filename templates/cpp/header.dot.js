/**
 * @file {{=data.name}}.h
 * @brief {{=data.description || 'Declaration of the ' + data.name + ' class'}}
 * @author {{=data.author.fullName}} <{{=data.author.email}}>
 * @date {{=data.date.toISOString().split('T')[0]}}
 */

#pragma once

{{? data.namespace }}
namespace {{=data.namespace}} {
{{?}}

class {{=data.name}} {
public:
	/**
	* @brief Constructor
	*/
	{{=data.name}}();

	/**
	* @brief Destructor
	*/
	{{? data.includeVirtualDestructor }}virtual {{?}}~{{=data.name}}();

	// Delete copy and move operations
	{{=data.name}}(const {{=data.name}}&) = delete;
	{{=data.name}}& operator=(const {{=data.name}}&) = delete;
	{{=data.name}}({{=data.name}}&&) = delete;
	{{=data.name}}& operator=({{=data.name}}&&) = delete;

private:
	// Private member variables

	// Private member functions
};

{{? data.namespace }}
} // namespace {{=data.namespace}}
{{?}}
