{{? data.typescript }}
import React{{? data.useHooks }}, { useState, useEffect }{{?}} from 'react';

{{? data.includeProps }}
interface {{=data.name}}Props {
  title?: string;
  // TODO: Add more props as needed
}
{{?}}

/**
 * {{=data.name}} component
 *
 * @component
 * @author {{=data.author.fullName}}
 * @created {{=data.date.toISOString().split('T')[0]}}
 */
const {{=data.name}} = ({{? data.includeProps }}props: {{=data.name}}Props{{??}}props: any{{?}}) => {
  {{? data.useHooks }}
  // State hooks
  const [count, setCount] = useState<number>(0);

  // Effect hooks
  useEffect(() => {
    // Component mount effect
    const timer = setTimeout(() => {
      console.log('{{=data.name}} mounted');
    }, 100);

    // Component unmount cleanup
    return () => {
      clearTimeout(timer);
    };
  }, []);
  {{?}}

  return (
    <div className="{{=data.name.toLowerCase()}}">
      <h2>{{? data.includeProps }}{{='{props.title || "' + data.name + '"}'}}{{??}}{{=data.name}}{{?}}</h2>
      {{? data.useHooks }}
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      {{?}}
    </div>
  );
};

export default {{=data.name}};
{{??}}
import React{{? data.useHooks }}, { useState, useEffect }{{?}} from 'react';

/**
 * {{=data.name}} component
 *
 * @component
 * @author {{=data.author.fullName}}
 * @created {{=data.date.toISOString().split('T')[0]}}
 */
const {{=data.name}} = (props) => {
  {{? data.useHooks }}
  // State hooks
  const [count, setCount] = useState(0);

  // Effect hooks
  useEffect(() => {
    // Component mount effect
    const timer = setTimeout(() => {
      console.log('{{=data.name}} mounted');
    }, 100);

    // Component unmount cleanup
    return () => {
      clearTimeout(timer);
    };
  }, []);
  {{?}}

  return (
    <div className="{{=data.name.toLowerCase()}}">
      <h2>{{? data.includeProps }}{{='{props.title || "' + data.name + '"}'}}{{??}}{{=data.name}}{{?}}</h2>
      {{? data.useHooks }}
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      {{?}}
    </div>
  );
};

export default {{=data.name}};
{{?}}
