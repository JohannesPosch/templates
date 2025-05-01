/**
 * @file {{=data.name}}.h
 * @brief {{=data.description || 'Header file for ' + data.name}}
 * @author {{=data.author.fullName}} <{{=data.author.email}}>
 * @date {{=data.date.toISOString().split('T')[0]}}
 */

{{? data.guardStyle === 'pragma' }}
#pragma once
{{??}}
#ifndef {{=data.name.toUpperCase()}}_H
#define {{=data.name.toUpperCase()}}_H
{{?}}

#ifdef __cplusplus
extern "C" {
#endif

/* Include dependencies */
#include <stdint.h>
#include <stdbool.h>

/* Type definitions */

/* Constant definitions */

/* Public function declarations */

/**
* @brief Initialize the {{=data.name}} module
*/
void {{=data.name}}_init(void);

/**
* @brief Deinitialize the {{=data.name}} module
*/
void {{=data.name}}_deinit(void);

#ifdef __cplusplus
}
#endif

{{? data.guardStyle !== 'pragma' }}
#endif /* {{=data.name.toUpperCase()}}_H */
{{?}}
